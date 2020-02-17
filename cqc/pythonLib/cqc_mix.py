#
# Copyright (c) 2017, Stephanie Wehner and Axel Dahlberg
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are met:
# 1. Redistributions of source code must retain the above copyright
#    notice, this list of conditions and the following disclaimer.
# 2. Redistributions in binary form must reproduce the above copyright
#    notice, this list of conditions and the following disclaimer in the
#    documentation and/or other materials provided with the distribution.
# 3. All advertising materials mentioning features or use of this software
#    must display the following acknowledgement:
#    This product includes software developed by Stephanie Wehner, QuTech.
# 4. Neither the name of the QuTech organization nor the
#    names of its contributors may be used to endorse or promote products
#    derived from this software without specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER ''AS IS'' AND ANY
# EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
# WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
# DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY
# DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
# (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
# LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
# ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
# (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
# SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

from typing import Union
from anytree import NodeMixin

from cqc.cqcHeader import (
    CQCIfHeader,
    CQCTypeHeader,
    CQCFactoryHeader,
    CQCType,
    CQCLogicalOperator,
)
from .util import CQCGeneralError


class CQCVariable:
    """
    Instances of this class are returned by measure command, if executed inside a CQCMix context.
    A CQCVariable holds a reference ID with which one can refer to the outcome of the measurement.
    """
    _next_ref_id = 0
    
    def __init__(self):
        """
        Increments the reference ID, and assigns the new unique reference ID to this CQCVariable.
        This system ensures no two CQCVariable instances have the same reference ID.
        """
        self._ref_id = CQCVariable._next_ref_id
        CQCVariable._next_ref_id += 1

    # make ref_id a read-only variable
    @property
    def ref_id(self):
        """
        Get the refernce ID of this CQCVariable. This is a read-only property.
        """
        return self._ref_id

    # override the == operator
    # other can be a CQCVariable or int
    def __eq__(self, other: Union['CQCVariable', int]):
        return _LogicalFunction(self, CQCLogicalOperator.EQ, other)
    
    # override the != operator
    def __ne__(self, other: Union['CQCVariable', int]):
        return _LogicalFunction(self, CQCLogicalOperator.NEQ, other)


class _LogicalFunction:
    """
    Private helper class. This class should never be used outside this pythonLib.
    """

    def __init__(
        self, 
        operand_one: CQCVariable, 
        operator: CQCLogicalOperator, 
        operand_two: Union[CQCVariable, int]
    ):
        """
        Stores all information necessary to create a logical comparison

        - **Arguments**

            :operand_one:   The CQCVariable that stores the measurement outcome that must be compared
            :operator:      One of the CQCLogicalOperator types that CQC supports. 
                            At present, equality and inequality are supported.
            :operand_two:   Either a CQCVariable or an integer. 
                            If a CQCVariable, then the value behind this variable will be compared to operand_one. 
                            If an integer, then the value behind operand_one will be compared to this integer.
        """

        self.operand_one = operand_one
        self.operator = operator
        self.operand_two = operand_two

    def get_negation(self) -> '_LogicalFunction':
        return _LogicalFunction(self.operand_one, CQCLogicalOperator.opposite_of(self.operator), self.operand_two)

    def get_CQCIfHeader(self) -> CQCIfHeader:
        """
        Builds the If header corresponding to this logical function.
        """

        if isinstance(self.operand_two, int):
            type_of_operand_two = CQCIfHeader.TYPE_VALUE
            operand_two = self.operand_two
        else:
            type_of_operand_two = CQCIfHeader.TYPE_REF_ID
            operand_two = self.operand_two._ref_id

        header = CQCIfHeader()
        header.setVals(
            self.operand_one.ref_id,
            self.operator,
            type_of_operand_two,
            operand_two,
            length=0
        )
        return header


class CQCMix(NodeMixin):
    """
    This Python Context Manager Type can be used to create CQC programs that consist of more than a single type.
    Hence the name CQC Mix. Programs of this type can consist of any number and mix of the other CQC types. 
    """

    def __init__(self, cqc_connection):
        """
        Initializes the Mix context.

        - **Arguments**

            :cqc_connection:    The CQCConnection to which this CQC Program must be sent.
        """

        self._conn = cqc_connection

        # Set the current scope to self
        self._conn.current_scope = self

    def __enter__(self):
        # Set the _inside_cqc_mix bool to True on the connection
        self._conn._inside_cqc_mix = True

        self._conn.pend_messages = True

        # Return self so that this instance is bound to the variable after "as", i.e.: "with CQCMix() as pgrm"
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        
        # Only do these things if there was no exception.
        if exc_type is None:
            # Build and insert the CQC Header
            self._conn.insert_cqc_header(CQCType.MIX)

            # Send this program to the backend
            self._conn.send_pending_headers()
            self._conn.reset_pending_headers()

            # We expect one message back, which can be an error or TP_DONE
            # This also blocks the program until we have received a message from the backend, 
            # which is important because it avoids that we send more messages before the backend is finished.
            message = self._conn.readMessage()

            # Check if it is an error and assume it is a TP_DONE if it is not an error
            self._conn.check_error(message[0])

            # We are no longer in a TP_MIX
            self._conn._inside_cqc_mix = False

            self._conn.pend_messages = False

            # Set the current scope to None, since we exit the CQCMix context 
            # current_scope is only used inside CQCMix contexts
            self._conn.current_scope = None

    def cqc_if(self, logical_function: _LogicalFunction):
        """
        Open a Python Context Manager Type to start an if-statement block.

        - **Arguments**

            :logical_function:      A _LogicalFunction instance. Never instantiate this explicitely; instead
                                    use the following: CQCVariable == 1 OR CQCVariable == CQCVariable. 
                                    CQCVariable can be any instance that you want to test to a value, or to another  
                                    CQCVariable. The operator can be == or !=. 
                                    The value can be any integer (though only 1 and 0 make sense).
                                
        """
        return _CQCConditional(self._conn, False, logical_function)

    def cqc_else(self):
        """
        Open a Python Context Manager Type to start an else-statement block.
        This will be  an else-block of the last closed cqc_if-block.                    
        """
        # Find out to which if this else belongs
        return _CQCConditional(self._conn, True)

    def loop(self, times: int):
        """
        Open a Python Context Manager Type to start a factory (i.e. repeated sequence of commands).

        - **Arguments**

            :times:     The number of times the commands inside body of this context should be repeated.
                                
        """
        return _CQCFactory(self._conn, times)


class _CQCFactory:
    """
    Private class to create factories inside CQCMix contexts. Never explicitely instantiate this class outside 
    the source code of this library.
    Instead, use CQCMix.loop(x), where x is the amount of times to repeat.
    """

    def __init__(self, cqc_connection, repetition_amount: int):
        self._conn = cqc_connection
        self._repetition_amount = repetition_amount

    def __enter__(self):

        # Inside a TP_FACTORY, we don't want CQCType headers before every instruction.
        # Therefore, we set this bool to False
        self._conn._inside_cqc_mix = False

        # Create the CQC Type header, and store it so that we can modify its length at __exit__
        self.type_header = CQCTypeHeader()
        self.type_header.setVals(CQCType.FACTORY, length=0)

        # Build the Factory header
        factory_header = CQCFactoryHeader()
        factory_header.setVals(self._repetition_amount)

        # Pend the headers
        self._conn._pend_header(self.type_header)
        self._conn._pend_header(factory_header)

    def __exit__(self, exc_type, exc_val, exc_tb):

        # Outside a TP_FACTORY, we want CQCType headers before every instruction.
        # Therefore, we set this bool to True
        self._conn._inside_cqc_mix = True

        # Calculate the length of the body of the factory
        # Loop in reverse through all pending_headers to calculate the length of all headers
        index = len(self._conn._pending_headers) - 1
        body_length = 0
        while self._conn._pending_headers[index] is not self.type_header:
            body_length += self._conn._pending_headers[index].HDR_LENGTH
            index -= 1
        
        # Set the correct length
        self.type_header.length = body_length


class _CQCConditional(NodeMixin):
    """
    Private helper class. Never explicitely instantiate this class outside the source code of this library.
    This Context Manager class is instantiated by CQCMix.cqc_if() and CQCMix.cqc_else(). Its 
    function is to build and pend CQC If headers.
    """

    # This private class variable holds the last _CQCConditional that 
    # functioned as an IF (as opposed to an ELSE) on which __exit__ is invoked. 
    # In other words, it is the last closed IF statement. 
    # This is important so that ELSE statements can find out to which IF statement they belong.
    # If this variable is None, then there either has not been aan IF statement yet, or the last 
    # _CQCConditional was an ELSE.
    _last_closed_conditional = None

    def __init__(self, cqc_connection, is_else: bool, logical_function: _LogicalFunction = None):
        self._conn = cqc_connection
        self.is_else = is_else

        if is_else:
            # If _last_closed_conditional is None, then there either has not been aan IF statement yet, or the last 
            # _CQCConditional was an ELSE.
            if _CQCConditional._last_closed_conditional is None:
                raise CQCGeneralError('Cannot use an ELSE if there is no IF directly before it.')
            else:
                # Get the negation of the logical function of the IF, 
                # which will be the logical function for this ELSE statement
                logical_function = _CQCConditional._last_closed_conditional._logical_function.get_negation()
            
        self._logical_function = logical_function

    def __enter__(self):
        # Pend CQC Type header
        self._conn._pend_type_header(CQCType.IF, CQCIfHeader.HDR_LENGTH)

        # Build the IF header, and store it so we can modify its length at __exit__
        self.header = self._logical_function.get_CQCIfHeader()

        # Pend the IF header
        self._conn._pend_header(self.header)

        # Register the parent scope, and set the current scope to self
        self.parent = self._conn.current_scope
        self._conn.current_scope = self

    def __exit__(self, exc_type, exc_val, exc_tb):

        # Set _last_closed_conditional to the correct value
        if (self.is_else):
            _CQCConditional._last_closed_conditional = None
        else:
            _CQCConditional._last_closed_conditional = self

        # Calculate the length of the body of the conditional
        # Loop in reverse through all pending_headers to calculate the lenght of all headers
        index = len(self._conn._pending_headers) - 1
        body_length = 0
        while self._conn._pending_headers[index] is not self.header:
            body_length += self._conn._pending_headers[index].HDR_LENGTH
            index -= 1
        
        # Set the correct length
        self.header.length = body_length
            
        # Set the scope to the parent scope
        self._conn.current_scope = self.parent
