Search.setIndex({docnames:["CQCToFile","Using CQCMix","api","classical_communication","examples","extend_ghz","index","installation","interface","modules/MessageHandler","modules/Protocol","modules/cqcHeader","modules/entInfoHeader","modules/hostConfig","modules/pythonLib","qber","teleport","usage","useful_commands"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["CQCToFile.rst","Using CQCMix.rst","api.rst","classical_communication.rst","examples.rst","extend_ghz.rst","index.rst","installation.rst","interface.rst","modules/MessageHandler.rst","modules/Protocol.rst","modules/cqcHeader.rst","modules/entInfoHeader.rst","modules/hostConfig.rst","modules/pythonLib.rst","qber.rst","teleport.rst","usage.rst","useful_commands.rst"],objects:{"cqc.MessageHandler":{CQCMessageHandler:[9,1,1,""],UnknownQubitError:[9,3,1,""],has_extra:[9,4,1,""]},"cqc.MessageHandler.CQCMessageHandler":{create_extra_header:[9,2,1,""],create_return_message:[9,2,1,""],handle_command:[9,2,1,""],handle_conditional:[9,2,1,""],handle_cqc_message:[9,2,1,""],handle_mix:[9,2,1,""],retrieve_return_messages:[9,2,1,""]},"cqc.Protocol":{CQCProtocol:[10,1,1,""]},"cqc.Protocol.CQCProtocol":{connectionLost:[10,2,1,""],connectionMade:[10,2,1,""],dataReceived:[10,2,1,""]},"cqc.cqcHeader":{CQCAssignHeader:[11,1,1,""],CQCCmdHeader:[11,1,1,""],CQCCommunicationHeader:[11,1,1,""],CQCEPRRequestHeader:[11,1,1,""],CQCFactoryHeader:[11,1,1,""],CQCHeader:[11,1,1,""],CQCIfHeader:[11,1,1,""],CQCLogicalOperator:[11,1,1,""],CQCMeasOutHeader:[11,1,1,""],CQCNotifyHeader:[11,1,1,""],CQCRotationHeader:[11,1,1,""],CQCSequenceHeader:[11,1,1,""],CQCTimeinfoHeader:[11,1,1,""],CQCType:[11,1,1,""],CQCTypeHeader:[11,1,1,""],CQCXtraHeader:[11,1,1,""],CQCXtraQubitHeader:[11,1,1,""],Header:[11,1,1,""]},"cqc.cqcHeader.CQCCommunicationHeader":{__init__:[11,2,1,""]},"cqc.cqcHeader.CQCNotifyHeader":{__init__:[11,2,1,""]},"cqc.cqcHeader.CQCTypeHeader":{make_equivalent_CQCHeader:[11,2,1,""]},"cqc.cqcHeader.CQCXtraHeader":{__init__:[11,2,1,""]},"cqc.cqcHeader.Header":{__init__:[11,2,1,""],pack:[11,2,1,""],printable:[11,2,1,""],setVals:[11,2,1,""],unpack:[11,2,1,""]},"cqc.entInfoHeader":{EntInfoCreateKeepHeader:[12,1,1,""],EntInfoHeader:[12,1,1,""],EntInfoMeasDirectHeader:[12,1,1,""]},"cqc.entInfoHeader.EntInfoCreateKeepHeader":{switch_nodes:[12,2,1,""]},"cqc.entInfoHeader.EntInfoHeader":{__init__:[12,2,1,""],switch_nodes:[12,2,1,""]},"cqc.entInfoHeader.EntInfoMeasDirectHeader":{switch_nodes:[12,2,1,""]},"cqc.hostConfig":{host:[13,1,1,""]},"cqc.hostConfig.host":{__init__:[13,2,1,""]},"cqc.pythonLib":{CQCConnection:[14,1,1,""],CQCMix:[14,1,1,""],qubit:[14,1,1,""]},"cqc.pythonLib.CQCConnection":{__init__:[14,2,1,""],close:[14,2,1,""],closeClassicalChannel:[14,2,1,""],closeClassicalServer:[14,2,1,""],commit:[14,2,1,""],createEPR:[14,2,1,""],get_remote_from_directory_or_address:[14,2,1,""],new_qubitID:[14,2,1,""],openClassicalChannel:[14,2,1,""],readMessage:[14,2,1,""],recvClassical:[14,2,1,""],return_meas_outcome:[14,2,1,""],sendClassical:[14,2,1,""],sendQubit:[14,2,1,""],startClassicalServer:[14,2,1,""]},"cqc.pythonLib.CQCMix":{__init__:[14,2,1,""],cqc_else:[14,2,1,""],cqc_if:[14,2,1,""],loop:[14,2,1,""]},"cqc.pythonLib.qubit":{H:[14,2,1,""],I:[14,2,1,""],K:[14,2,1,""],T:[14,2,1,""],X:[14,2,1,""],Y:[14,2,1,""],Z:[14,2,1,""],__init__:[14,2,1,""],check_active:[14,2,1,""],cnot:[14,2,1,""],cphase:[14,2,1,""],getTime:[14,2,1,""],measure:[14,2,1,""],release:[14,2,1,""],reset:[14,2,1,""],rot_X:[14,2,1,""],rot_Y:[14,2,1,""],rot_Z:[14,2,1,""]},cqc:{MessageHandler:[9,0,0,"-"],Protocol:[10,0,0,"-"],cqcHeader:[11,0,0,"-"],entInfoHeader:[12,0,0,"-"],hostConfig:[13,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:function"},terms:{"0x01":8,"0x02":8,"0x04":8,"0x08":8,"abstract":8,"byte":[8,9,11,15],"case":[1,3,8,15,16],"class":[0,1,8,9,10,11,12,13,14,17],"default":[14,15,18],"float":14,"function":[3,8],"import":[0,1,5,16,18],"int":[8,11,14,15,18],"new":[5,8,9,14,18],"return":[8,9,11,14,18],"static":9,"switch":12,"true":[0,8,14,15,18],"try":[14,15],But:17,Eve:3,For:[6,8,10,13,14,15,17,18],IDs:[8,14],One:18,Such:3,The:[0,2,3,4,8,9,10,14,17,18],There:[0,3],These:1,Use:14,Used:[8,11,12,14],Useful:[6,17],Using:[4,6],__init__:[11,12,13,14],_inplac:8,_logicalfunct:14,_pack:11,_printabl:11,_recv:8,_setval:11,_unpack:11,about:[8,16],abov:[1,15,18],absenc:8,abstact:11,accept:10,access:[8,15],action:[14,18],activ:14,actual:17,adapt:11,add:18,addit:[8,9],addition:18,address:[14,17,18],addtion:11,after:[1,3,8,10,12],afterward:18,agre:15,aim:17,alic:[1,3,13,17,18],alicetest:[5,15,16],align:8,aliv:8,all:[1,3,5,8,14,18],alloc:[8,17],allocate_qubit:0,allow:17,alreadi:[0,1,8,14,18],also:[0,3,4,8,15,17,18],alwai:10,ancillari:1,angl:[8,11,14,18],ani:[0,1,3,8,10,11,14,15,17],announc:[8,11],anoth:[0,8,14,18],anti:15,api:6,app:[5,8,14,16],app_id:[8,9,11],app_id_a:8,app_id_b:8,append:[0,15],appid:14,appli:[1,3,14,15,16,17,18],applic:[1,3,7,8,14,17,18],appropri:8,architectur:1,arg:11,argument:[0,14,15,17,18],around:[8,14,15],ask:8,assum:[1,3,4,17],attach:15,avail:[8,12,15],avg_qber:15,axi:14,back:[9,14,15,18],backend:[1,5,7,8,14,15,16,17,18],background:4,base:[9,15,18],basi:[5,14,15],becaus:[1,10],becom:18,been:[1,3,10,18],befor:[8,10,14,15],beforehand:[15,18],begin:15,being:4,below:[3,4,5,8,15,16,18],benchmark:15,between:[1,3,14,15,17,18],binari:0,bit:1,block:[8,10,14],bob:3,bob_meas_outcom:15,bobtest:[5,15,16],bodi:[9,14],bool:[14,18],both:[1,12,15,18],built:[3,8,14],call:[3,9,10,18],can:[0,1,3,4,5,7,8,11,14,15,16,17,18],cannot:3,care:3,cdot:18,center:1,certain:[11,17,18],cfg:18,charli:16,charlietest:5,check:[8,9,14,15],check_act:14,choic:8,choos:15,circuit:1,circular:10,classic:[0,6,8,14,17,18],cleanli:10,clear:10,cleariti:11,cli:[5,15,16],client:[3,8,10],clock:15,clone:7,close:[3,10,14,17],close_aft:14,closeclassicalchannel:14,closeclassicalserv:14,cmd:[8,9,11],cmd_data:9,cmdlength:8,cmdsequencehead:18,cnot:[1,5,8,14,16,18],code:[1,5,15,16],coher:15,com:4,combin:[3,6,17],come:[3,7],command:[4,6,9,11,14,17],commenc:10,comment:8,commit:14,commmand:8,commun:[0,6,9,12,14,17],comparison:8,complet:[8,9,10],comput:[8,15,17],conclud:1,condit:8,config:[14,18],conn_retry_tim:14,connect:[3,5,6,8,10,14,15,16,18],connectiondon:10,connectionlost:10,connectionmad:10,consid:[5,10,16],consist:[14,15,17],constitut:8,construct:[8,15],contain:[0,2,5,8,11,15,16],content:[2,6],context:[1,14,17],control:[1,3,5,8,16,17],correct:[1,9,12,14,16,17],correctli:17,correl:15,correspon:5,correspond:18,could:17,count:15,cours:18,cphase:[8,14,18],cqc:[0,1,2,3,4,5,7,9,10,11,12,13,14,16,17,18],cqc_cmd_alloc:8,cqc_cmd_cnot:8,cqc_cmd_cphase:8,cqc_cmd_epr:8,cqc_cmd_epr_recv:8,cqc_cmd_h:8,cqc_cmd_i:8,cqc_cmd_k:8,cqc_cmd_measur:8,cqc_cmd_measure_inplac:8,cqc_cmd_new:8,cqc_cmd_recv:8,cqc_cmd_releas:8,cqc_cmd_reset:8,cqc_cmd_rot_i:8,cqc_cmd_rot_x:8,cqc_cmd_rot_z:8,cqc_cmd_send:8,cqc_cmd_t:8,cqc_cmd_x:8,cqc_cmd_y:8,cqc_cmd_z:8,cqc_connect:14,cqc_els:[14,18],cqc_if:[1,14,18],cqc_mix:[1,14],cqc_opt_act:8,cqc_opt_block:8,cqc_opt_ifthen:8,cqc_opt_notifi:8,cqc_tp_command:8,cqc_tp_done:8,cqc_tp_epr_ok:8,cqc_tp_factori:8,cqc_tp_get_tim:8,cqc_tp_measout:8,cqc_tp_new_ok:8,cqc_tp_recv:8,cqc_version:[9,11],cqcassignhead:11,cqccmdheader:[8,11],cqccommunicationhead:11,cqcconnect:[0,1,3,5,6,14,15,16,17],cqceprrequesthead:11,cqcfactoryhead:[8,11],cqcfile:14,cqcheader:[2,6,8,9,14],cqcifhead:11,cqclogicaloper:11,cqcmeasouthead:[8,11],cqcmessag:9,cqcmessagehandl:9,cqcmix:[4,6,14,18],cqcmixconnect:14,cqcnode:18,cqcnotifyhead:[8,11,14],cqcprotocol:10,cqcrotationhea:11,cqcrotationhead:[8,11],cqcsequencehead:11,cqctimeinfohead:[8,11],cqctofil:[4,6],cqctype:[8,11],cqctypehead:11,cqcvariabl:14,cqcxtrahead:[8,11],cqcxtraqubithead:[8,11],creat:[1,5,8,9,14,15,16,17,18],create_extra_head:9,create_qubit:0,create_return_messag:9,createepr:[5,14,15,16,18],createnew:14,creation:8,current:[8,11,14],damag:1,data:[9,10,11,15,16],datareceiv:10,datetim:8,deal:1,debug:14,decis:15,decod:15,def:[5,16],defin:[8,11],definit:[6,11],deliber:8,demonstr:17,denot:3,depend:[8,14,16,18],deprec:8,describ:[8,15,17],descript:1,design:1,destruct:14,detail:[8,11,13,15,17],determin:14,develop:3,differ:15,direction:[8,12],directli:[8,12,17],distribut:[4,6],do_sequ:18,document:8,doe:[0,1,3,7,8,11],doesn:1,doing:18,don:11,done:[3,8,14,17],down:10,due:1,dump:15,each:[3,8,14],eas:3,easi:3,easier:[0,17],easiest:8,easili:17,effect:8,effici:3,eigenbasi:8,either:[14,15],elif:15,els:[14,15,18],emiss:12,enabl:8,encod:[3,15],end:[8,14,15,16,17],enough:10,ensur:1,entangl:[3,5,12,14,15,17],entinfo:14,entinfocreatekeephead:12,entinfohead:[2,6,14],entinfomeasdirecthead:12,entir:10,entri:15,enumer:11,epr:[5,8,11,14,15,16,18],epr_ok:8,equal:8,equival:[1,11],err_gener:8,err_inus:8,err_noqubit:8,err_timeout:8,err_unknown:8,err_unsupp:8,error:[1,8,10,14,15,17],establish:[8,10],estim:[4,6,8],etc:[8,9],even:17,everi:8,everyth:[5,15,16],everytim:17,exactli:11,examopl:18,exampl:[1,3,5,6,8,11,14,15,16,17],except:[0,8,9],exclud:[8,9],execut:[1,3,5,8,15,16,17],expir:8,explicit:[14,15,18],extend:[5,8],extendghz:5,extern:10,extra:9,extract:14,extrem:17,factori:[9,10,11,14],fail:14,failur:10,fals:[0,8,14,15,18],familiar:3,featur:3,fidel:8,field:8,figur:3,file:[1,4,6,14,18],filenam:0,find:14,finish:[8,14],first:[1,4,8,10,15,17],firstli:3,flag:[8,12,18],flip:[1,12],flush:[0,14,18],flush_factori:18,folder:[5,7,15,16],follow:[0,1,2,5,8,11,13,14,15,16,17],forc:3,form:0,format:[5,8,11,15,16],found:[1,3,4,8],fourth:18,frac:18,fresh:5,from:[0,1,3,5,6,8,11,12,14,15,16,17,18],further:[4,8],furthermor:8,futur:[8,11],gate:[1,8,11,14,17,18],gener:[8,11,12,15],get:[4,6,8,15],get_entinfo:15,get_remote_from_directory_or_address:14,get_tim:8,gettim:14,gettingstart:[4,6,17],ghz:[4,6],github:[3,4,6,17],give:[8,12,17],given:[0,9,11,14,17],good:8,great:1,greet:10,guarante:15,hadamard:[8,14,16,17],handl:[3,9,14],handle_command:9,handle_condit:9,handle_cqc_messag:9,handle_mix:9,handler:[9,14],hardwar:[3,17],has:[0,1,8,10,11,14,18],has_extra:9,have:[1,3,4,15,17,18],header:[6,9,10,11,12,14],headerbyt:[11,12],hello:8,henc:14,her:[15,16],here:[1,3,5,8,10,15,16,18],higher:8,his:5,host:[13,14],hostconfig:[2,6],hostnam:[13,17],how:[3,6,8,14,17],howev:[3,15,17,18],html:[3,4,6,17],http:[3,4,6,17],id_ab:[8,15],ident:[8,14],identifi:[8,15],immedi:0,implement:[1,3],includ:[3,9],incom:[8,9,17],increas:11,increment:8,incur:1,inde:8,index:6,indic:[8,11],ineffici:18,inequ:8,inf_tim:[8,14],info:[8,16],inform:[3,6,9,11,12,13,14,17],initi:[1,5,8,10,11,12,13,14,15,16,17,18],inplac:[8,14,18],input:18,insid:[1,8,14],instal:[3,6,14,17],instanc:[3,14],instanti:[14,17],instead:[0,14,18],instr:8,instruct:[1,6,8,11,17,18],integ:[8,14],intend:15,intenum:8,interact:[3,8],interest:15,interfac:[3,6,17],intern:[3,14],internet:[10,17],interpret:8,introduct:6,ipv4:8,issu:8,item:15,iter:8,its:[1,8],itself:8,json:15,just:[3,13],keep:[8,13],kept:[12,18],keyword:0,know:[8,17],kwarg:11,languag:8,last:14,latenc:1,later:0,layer:17,leav:8,led:1,left:[14,18],len:[5,15,16],length:[8,9,11],less:1,let:[3,17],level:[8,14],lib:8,librari:[3,5,6,7,8,14,15,16,17,18],lifetim:8,like:17,list:[8,14,16,18],listen:[6,7,17],load:[14,15],local:[3,5,15,16],localhost:[5,13,15,16],log:14,log_level:14,logical_funct:14,look:17,loop:[14,18],lower:15,made:10,mai:[8,10],main:[5,16],make:[5,7,8,11,14,15,16,17],make_equivalent_cqchead:11,manag:[1,8,14],mani:[8,14,18],manipul:17,master:4,mathrm:18,max:14,maxsiz:14,mean:[8,15],meas_out:8,meas_outcom:15,measout:[8,14],measuement:15,measur:[1,3,5,8,11,12,14,15,16,17,18],memori:14,messaag:9,messag:[0,3,4,7,8,9,10,12,14,15,16,17,18],messagehandl:[2,6],method:[3,9,11,14,18],mid:8,mix:[1,8,14],modif:11,modul:[2,6],modulu:15,more:[0,1,3,6,8,14,15,17],msg:[3,14,15,18],msg_size:[14,15],msg_type:9,multipl:[8,18],must:[8,14],name:[0,5,13,14,15,16,18],nativ:18,nativemodetempl:3,necessari:8,necessarili:15,need:[3,8,10,14,15,17],network:[3,6,8,13,14,15],network_config_fil:14,network_nam:14,never:[3,14],new_ok:8,new_qubitid:14,next:[8,17],node:[1,3,5,6,8,11,12,13,14,15,16,17,18],node_a:8,node_b:8,nofifi:14,nois:[1,15],noisi:15,none:[9,11,12,14],nonus:14,note:[1,3,8],noth:8,notic:9,notif:[8,11],notifi:14,now:[8,13,14,16,18],nr_data_point:15,nr_run:15,num_it:[8,18],number:[0,8,13,14,15,17,18],object:[3,14,17,18],occur:17,off:15,old:17,onc:[10,18],one:[1,3,8,14,18],onli:[1,8,11,14],onto:14,open:[3,14,18],openclassicalchannel:14,oper:[3,5,8,14,16,17],operand:8,optim:1,option:[8,11,15,18],optom:1,order:15,origin:1,other:[8,14],otherwis:[8,18],our:15,outcom:[3,5,8,11,14,15,16,18],over:[8,14,17],overrid:11,overview:3,overwrit:0,own:[3,8,17],pack:11,packag:1,packet:[8,10,11,12],page:[1,6],pair:[5,8,14,15,16,18],paper:15,param:[9,11,14],paramet:15,parser:8,part:[14,18],parti:[5,8,16],particular:15,partit:5,pass:15,pauli:[8,16],pend:[14,18],pend_messag:[0,14,18],per:8,perfectli:15,perform:[1,5,8,14,15,16,17,18],pgrm:[1,18],pip3:7,pmatrix:15,point:15,port:[8,12,13,14,17],port_a:8,port_b:8,possibl:[8,11,17],post:[14,18],potenti:1,preced:8,prefer:[3,17],preoviou:8,prepar:16,present:3,previou:8,print:[5,15,16,17],print_cqc:14,printabl:11,probabilist:15,process:[0,10,15],produc:[8,11,15],program:[4,6,8,14,17],protocol:[2,6,8,9,17],provid:[1,6,8,14,17],pseudocod:1,purpos:[8,11],put:16,pypi:6,python:[3,5,6,8,10,14,15,16,17,18],pythonlib:[0,1,2,5,6,15,16,17,18],q_a:[5,16],q_b:[5,16],q_c:5,q_id:14,qber:[4,6],qbit1:[1,18],qbit2:[1,18],qbit3:1,qbit:18,quantum:[3,6,8,17],qubit:[0,1,3,5,6,11,12,14,15,16,17],qubit_1:1,qubit_2:1,qubit_3:1,qubit_id:8,qutech:13,radian:14,rais:14,rang:[14,15,18],rangl:[16,18],rate:15,rather:11,reach:14,read:[4,14],readmessag:14,real:[3,17],realist:15,realiz:[3,17],reason:[8,10,18],receiv:[0,5,8,10,11,12,14,15,16,17,18],recommend:[4,8],recov:1,recoveri:1,recv:8,recvclass:[14,15,16,18],recvepr:[15,16,18],recvqubit:[5,18],refer:[8,10,11,17],rel:1,relat:15,releas:[8,14,17],release_qubit:14,relev:11,reli:0,remain:14,remod:8,remot:[6,8,14],remote_app_id:8,remote_appid:14,remote_nod:8,remote_port:8,remote_socket:14,remov:[8,14,18],repeat:14,repeatedli:8,repetit:8,replac:0,repo:[5,7,15,16],represent:1,request:[8,9],requir:[3,8],reset:[8,14],respect:[3,8],result1:1,result2:1,result:[5,18],retri:14,retriev:[8,9],retrieve_return_messag:9,retry_connect:14,return_meas_outcom:14,right:18,rot:8,rot_i:[14,18],rot_x:[14,18],rot_z:[14,18],rotat:[9,11,14,18],round:15,rule:15,run:[4,5,14,15,16],runtimeerror:14,sai:8,same:[0,11,14,15,17],save:[1,15],schemat:3,script:[5,15,16],search:6,second:[1,8,14,15],secondari:11,section:17,see:[6,8,15,17],self:11,send:[0,3,5,7,8,9,10,11,14,15,16,17,18],sendclass:[3,14,15,16,18],sendfactori:0,sendgettim:0,sendqubit:[5,14,18],sens:14,sent:[3,4,14,17,18],seper:11,sequenc:[8,11,14,15],sequence_nr:15,server:[0,3,10,14,17,18],set:[3,8,11,14,18],set_pend:18,setup:[3,14,15,17],setval:11,share:[5,8,16],ship:1,should:[5,9,11,14,15,16,17],shut:10,simpl:8,simpli:3,simul:[3,5,6,7,8,15,16],simulaqron:[1,3,4,5,6,7,8,14,15,16,17],sinc:[3,14,15],singl:[14,18],size:[11,14],skip:8,slight:1,slower:15,socket:[3,10,14,17,18],socket_address:[14,17],softwarequtech:[3,4,6,17],some:[8,14,16,17,18],someon:3,soon:15,sourc:[6,8,9,10,11,12,13,14],specif:8,specifi:[8,9,11,14,17,18],specifii:8,split:8,sqrt:18,standard:[5,14],start:[4,5,6,8,14,15,16,18],startclassicalserv:14,state:[1,4,6,8,14,16,18],statement:[14,17],step:[1,8,14,18],still:17,stop:10,store:[8,18],str:[11,14],stream:8,string:[11,18],sub:11,subclass:11,suppli:8,support:[0,8,18],sure:17,switch_nod:12,syndrom:1,tabl:8,tag:8,take:[3,8],taken:18,talk:3,target:[1,5,8,14,16,18],tcp:17,teleport:[4,6],tell:8,templat:3,test:[1,14],test_cases_cqcconnect:1,test_prepar:0,textform:0,than:[1,14],thei:[5,15,16],them:[0,15],therebi:1,therefor:[8,15],thi:[0,1,3,6,7,8,9,10,11,14,15,16,17,18],third:15,though:14,three:[1,3,5,18],through:[1,4,6,14,17],thu:[3,15],time:[1,8,11,14,15,18],timeout:8,timestamp:8,timinig:8,timout:14,to_print:[5,15,16],tog:8,togeth:8,tomographi:0,top:3,total:8,tp_if:9,tp_mix:9,track:8,translat:3,transport:9,travel:1,tree:4,tri:[3,14,17],trivial:17,tune:15,tupl:14,turn:[3,15],twist:10,two:[1,5,8,11,15,16,18],type:[1,5,9,10,11,14,15,16],uint16_t:8,uint32_t:8,uint64_t:8,uint8_t:8,under:15,uniqu:8,unknown:8,unknownqubiterror:9,unpack:11,unsign:8,until:[0,8],unus:8,upon:8,use:[0,1,3,4,6,7,8,14,15,17],use_classical_commun:14,used:[1,8,11,14,15,18],useful:[17,18],using:[3,5,6,8,11,12,15,16,17],utf:15,valu:[8,11,12,14,15],valueerror:14,variabl:1,verifi:7,version:[8,9,11,14],via:[0,8],virtual:17,wai:[6,8,14,17],wait:[8,10,14],wall:15,want:[0,3,8,14],warn:[14,17],well:[3,8],were:[1,17,18],what:[5,15,16],when:[5,8,10,14,15,16,18],whenev:17,where:[3,6,8,12,15,17],whether:[0,8,9,14],which:[0,1,3,4,5,7,8,9,11,14,15,16,17,18],who:8,whole:14,wish:[8,14],without:17,would:[3,8],write:[4,6,7,8],written:0,xtra_qubit_id:8,yield:[1,8,18],you:[0,3,4,7,8,10,14,15,17,18],your:[3,8,15,17],yournod:13,yourself:8},titles:["Writing Commands to File with CQCToFile","Using CQCMix","API documentation","Classical Communication","Examples using the python library","Distribute a GHZ-state","Welcome to cqc\u2019s documentation!","Installation","CQC Interface","MessageHandler","Protocol","cqcHeader","entInfoHeader","hostConfig","pythonLib","Estimating QBER","Teleport","Getting started","Useful commands"],titleterms:{The:[1,5,15,16],Useful:18,Using:1,alic:[5,15,16],api:2,assign:8,bob:[5,15,16],charli:5,classic:3,command:[0,8,18],commun:[3,8],condit:18,connect:17,cqc:[6,8],cqcconnect:18,cqcheader:11,cqcmix:1,cqctofil:0,definit:8,distribut:5,document:[2,6],entangl:8,entinfohead:12,estim:15,exampl:[0,4],extra:8,factori:[8,18],file:0,from:7,get:17,ghz:5,header:8,hostconfig:13,indic:6,inform:8,instal:7,interfac:8,introduct:8,librari:4,logic:18,mea:8,messagehandl:9,network:17,notifi:8,out:8,program:[1,5,15,16],protocol:[1,5,10,15,16],pypi:7,python:4,pythonlib:14,qber:15,qubit:[8,18],remot:17,rotat:8,sequenc:18,set:[5,15,16],simul:17,sourc:7,start:17,state:5,tabl:6,teleport:16,timeinfo:8,type:8,usag:0,using:[1,4],welcom:6,write:0,xtra:8}})