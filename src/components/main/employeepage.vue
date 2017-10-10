<template>
	<div>    
		<div id="L-mainbanner">
			<img src="../../assets/img/mainimg/banner.png"/>
		</div>
		
		<div id="L-mainmange">
			<el-row>
			  <el-col :span="6" class="L-mainmangestyle">
				<div @click="temporary()">	
				  	<div class="circle L-green"><i class="iconfont iconfontsize icon-xinzi"></i></div>
				  	<div id="fontstyle">薪资查询</div>
			  	</div>
			  </el-col>
			  <el-col :span="6" class="L-mainmangestyle" >
			  	<div @click="temporary()">
			  		<div class="circle L-yellew " ><i class="iconfont iconfontsize icon-shenqing1"></i></div>
			  		<div id="fontstyle">请假申请</div>
			  	</div>
			  </el-col>
			  <el-col :span="6" class="L-mainmangestyle">
			  	<div @click="temporary()">
				  	<div class="circle L-shenred"><i class="iconfont iconfontsize icon-icon7"></i></div>
				  	<div id="fontstyle">开具证明</div>
				</div>
			  </el-col>
			  <el-col :span="6" class="L-mainmangestyle">
			  	<div @click="temporary()">
				  	<div class="circle L-blue"><i class="iconfont iconfontsize icon-guoqi_flag"></i></div>
				  	<div id="fontstyle">考核测评</div>
			  	</div>
			  </el-col>

			</el-row>
		</div>
		<div id="L-mainuserlist">
			<el-row type="flex" :gutter="16">
				<el-col :span="11" style='position: relative;'>
					<div v-show="listdata==''" style="text-align: center;width:135px;height:84px;position: absolute;z-index: 999;top: 40%;left: 50%;margin-left: -70px;">
						<img  src="../../assets/img/nodata.png"/>
						<span>暂无数据哦</span>
					</div>

					<div class="morelist" @click="morelist">更多&gt;&gt;</div>
					<el-tabs v-model="activeName" @tab-click="handleClick">
						
					    <el-tab-pane  name="first">
					    	 <span slot="label">工作任务<i v-show="totalshow==0" class="iconfont iconfontmain icon-xiaoxi"><span class="messagetatal">{{listdata.totalcount}}</span></i></span>
					    	<li class="L-list clearfix" v-for="(item, index) in listdata.msglist" @click="rowhand(index)">
					    		<span class="L-order">{{index+1}}.</span>
					    		<span class="L-listtitle">
					    			{{item.subject}}
					    			<span class="col"></span> 
					    		</span>
					    		<span class="L-date">{{item.sendtime}}</span>
					    	</li>
					    	
					    	
					    	
					    </el-tab-pane>
					    <el-tab-pane  name="second">
					    	 <span slot="label">通知消息<i v-show="totalshow==1" class="iconfont iconfontmain icon-xiaoxi"><span class="messagetatal">{{listdata.totalcount}}</span></i></span>
					    	<li class="L-list clearfix" v-for="(item, index) in listdata.msglist" @click="rowhand(index)"> 
					    		<span class="L-order">{{index+1}}.</span>
					    		<span class="L-listtitle">
					    			{{item.subject}}
					    			<span class="col"></span>
					    		</span>
					    		<span class="L-date">{{item.sendtime}}</span>
					    	</li>
					    	
					    </el-tab-pane>
					    <el-tab-pane  name="third">
					    	<span slot="label">预警消息<i v-show="totalshow==2" class="iconfont iconfontmain icon-xiaoxi"><span class="messagetatal">{{listdata.totalcount}}</span></i></span>
					    	<li class="L-list clearfix" v-for="(item, index) in listdata.msglist"  @click="rowhand(index)">
					    		<span class="L-order">{{index+1}}.</span>
					    		<span class="L-listtitle">
					    			{{item.subject}}
					    			<span class="col"></span>
					    		</span>
					    		<span class="L-date">{{item.sendtime}}</span>
					    	</li>
					    </el-tab-pane>
					</el-tabs>
				</el-col>
				<el-col :span="7">
					<el-tabs v-model="activeName1" >
					    <el-tab-pane label="规章制度" name="first">
					    	<li class="L-list clearfix" @click="temporary()">
					    		<span class="L-order">1.</span>
					    		<span class="L-ruleslisttitle">
					    			新员工转正管理制度
					    			<span class="col"></span>
					    		</span>
					    		<span class="L-date">2017-08-03</span>
					    	</li>
					    	<li class="L-list clearfix" @click="temporary()">
					    		<span class="L-order">2.</span>
					    		<span class="L-ruleslisttitle">
					    			新员工管理制度
					    			<span class="col"></span>
					    		</span>
					    		<span class="L-date">2017-08-03</span>
					    	</li>
					    	<li class="L-list clearfix" @click="temporary()">
					    		<span class="L-order">3.</span>
					    		<span class="L-ruleslisttitle">
					    			社会保险及公积金管理制度
					    			<span class="col"></span>
					    		</span>
					    		<span class="L-date">2017-08-03</span>
					    	</li>
					    	<li class="L-list clearfix" @click="temporary()">
					    		<span class="L-order">4.</span>
					    		<span class="L-ruleslisttitle">
					    			劳动合同续签管理制度
					    			<span class="col"></span>
					    		</span>
					    		<span class="L-date">2017-08-03</span>
					    	</li>
					    </el-tab-pane>
					   
					</el-tabs>
				</el-col>
				<el-col :span="6">
					<el-tabs v-model="activeName2" >
					    <el-tab-pane label="我的应用" name="first">
					    	<el-row >
					    		<el-col :span="8" class="system" >
				    				<div @click="mailhref()">
				    					<div  class="systemback  L-qianblue"><i class="iconfont iconfontsize icon-youjian"></i>
						    				<!--<span class="systembackmsg">12</span>-->
						    			</div>
						    			<div class="systemcolor">邮件系统</div>
				    				</div>
					    		</el-col>
					    		
					    		<el-col :span="8" class="system">
					    			<div @click="publichref()">
					    				<div class="systemback  L-qianyellow"><i class="iconfont iconfontsize icon-gonggao"></i></div>
					    				<div class="systemcolor">公共通知</div>
					    			</div>
					    		</el-col>
					    		<el-col :span="8" class="system ">
					    			<div @click="filehref()">
					    				<div class="systemback L-shenred"><i class="iconfont iconfontsize icon-wenjian"></i></div>
					    				<div class="systemcolor">文件系统</div>
					    			</div>
					    		</el-col>
					    		<el-col :span="8" class="system">
					    			<div @click="handlehref()">
					    				<div class="systemback  L-green"><i class="iconfont iconfontsize icon-daiban"></i></div>
					    				<div class="systemcolor">办公待办</div>
					    			</div>
					    		</el-col>
					    		<el-col :span="8" class="system">
					    			<div @click="businesshref()">
					    				<div class="systemback  L-yellew"><i class="iconfont iconfontsize icon-yewu"></i></div>
					    				<div class="systemcolor">业务待办</div>
					    			</div>
					    		</el-col>
					    		<el-col :span="8" class="system">
					    			<div @click="meethref()">
					    				<div class="systemback L-blue"><i class="iconfont iconfontsize icon-huiyiziliao"></i></div>
					    				<div class="systemcolor">会议资料</div>
					    			</div>
					    		</el-col>
					    		
					    	</el-row>
					    	
					    </el-tab-pane>
					    
					</el-tabs>
				</el-col>
			</el-row>
		</div>
		
		<MessageDialog :dialogvisible="openDialog" :data="msgdata" :judgedialog="judgedialog"
			@close="openDialog = false"
			@read="msgRead">
		</MessageDialog>
	</div>
</template>

<script>
	
import Qs from 'qs';

import MessageDialog from '@/components/messagecenter/dialogmsg';

var UserInfo;
export default{
	computed: {
		url(){  
			return this.$store.state.Interface.msglist;
		} 
	},
	components: { 
		MessageDialog
	},
	data(){
		return { 
			 openDialog: false, //默认关闭对话框
			 judgedialog:'handle',//初始是工作任务
			
			 activeName: 'first',
			 activeName1: 'first',
			 activeName2: 'first',
			 totalshow:0,
			 msgparam: {
				sendStr: '',
				isRead: 'N',
				receiver:'',
				transType: 'msglist',
				msgType:'',
				pageIndex: 0,
				isHandled: 'N',
				pageSize: 4
			},
			listdata:'',
			msgdata:''
		}
	},
	mounted(){
		UserInfo = JSON.parse( window.localStorage.getItem("usermsg") );//获取人员信息
		this.msgparam.receiver=UserInfo.cuserid;
		this.loadMsg( 'worklist'); //初始显示流程消息数据
	},
	
	methods: {
		//消息被置为已读
	    msgRead(){  
	    	this.openDialog = false;
	    	this.loadMsg(this.msgparam.msgType);  
	    },
      handleClick(tab, event) {
      	if(tab.index=="0"){
      		this.msgparam.msgType='worklist';
      		this.judgedialog='handle';
      		this.loadMsg( 'worklist');
      		this.totalshow=0;
      		
      	}else if(tab.index=="1"){
      		this.msgparam.msgType='notice';
      		this.judgedialog='inform';
      		this.loadMsg('notice');
      		this.totalshow=1;
      	}else if(tab.index=="2"){
      		this.msgparam.msgType='prealert';
      		this.judgedialog='warning';
      		this.loadMsg('prealert');
      		this.totalshow=2;
      	}
        
      },
      rowhand(index){
      	//判断是通知消息还是代办消息
      		var row=this.listdata.msglist[index]
	    	if(this.msgparam.msgType=='worklist'){
	    		//判断单据的类型，是离职、转正、等
	    		this.$http.post( this.url, Qs.stringify ({
					transType:'msgBill',
					pk_psndoc:UserInfo.pk_psndoc,
					billId:row.billId,
					billType:row.billType
				}), {
		          	headers: {
		                'Content-Type': 'application/x-www-form-urlencoded;charset=gbk'
		          	}
		      	}).then(( response ) => {  
					var _data = response.data; 
					if( _data.flag == "1" ){ //操作失败
						this.$message.error( _data.des );
					}else{
						console.log(_data)
						this.openDialog = true; 
						this.msgdata = row;
		    			this.msgdata.Datalist = JSON.parse(_data.data).headMsg;
		    			this.msgdata.Hisapprove = _data.hisapprove;
					}; 
				}).catch((err) => { 
					this.$message.error( err );
				}); 
	    		
	    		
	    		
	    	}else if(this.msgparam.msgType=='notice'){
	    		//如果是通知需要判断通知的类型，是消息还是单据
	    		if(row.msgsourcetype=='notice'){
	    			//通知判断为空的时候
	    			this.openDialog = true; 
			    	this.msgdata = row;
//			    	this.msgdata.msgType = this.param.msgType;
			    	 
	    		}else if(row.msgsourcetype=='worklist' || row.msgsourcetype=='pfbizmsg'){
	    			//不为空的时候需要向后端发送请求显示字段的详细信息；
	    			//获取列表数据；
					this.$http.post( this.url, Qs.stringify ({
						transType:'msgBill',
						pk_psndoc:UserInfo.pk_psndoc,
						billId:row.billId,
						billType:row.billType
					}), {
			          	headers: {
			                'Content-Type': 'application/x-www-form-urlencoded;charset=gbk'
			          	}
			      	}).then(( response ) => {  
						var _data = response.data; 
						if( _data.flag == "1" ){ //操作失败
							this.$message.error( _data.des );
						}else{
							console.log(_data)
							this.openDialog = true; 
							this.msgdata = row;
			    			this.msgdata.msgType = this.param.msgType;
			    			this.msgdata.Datalist = JSON.parse(_data.data).headMsg;
			    			this.msgdata.Hisapprove = _data.hisapprove;
			    			console.log(this.msgdata)
						}; 
					}).catch((err) => { 
						this.$message.error( err );
					}); 
	    		}
	    		
	    		
	    	}else if(this.msgparam.msgType=='prealert'){
	    		this.openDialog = true; 
		    	this.msgdata = row;
	    	}
	    	
      },
      temporary(){
      	this.$message('开发中敬请期待！！！');
      },
      morelist(){
      	if(this.totalshow==0){
      		this.$router.push({
	  			name:'/Handlemessagelist',
	  		});
      	}else if(this.totalshow==1){
      		this.$router.push({
	  			name:'/Informmessagelist',
	  		});
      	}else if(this.totalshow==2){
      		this.$router.push({
	  			name:'/Warningmessagelist',
	  		});
      	}
      },
      loadMsg( type ){
      	
      	this.msgparam.msgType = type;
      	var _param = this.msgparam;
		//获取列表数据；
		this.$http.post( this.url, Qs.stringify ( _param ), { 
          	headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=gbk'
          	}
      	}).then(( response ) => {  
			var _data = response.data; 
			
			if( _data.flag == "0" ){ //操作失败
//				this.loadingFlag=false;
//				this.tableData = _data.msglist;
//				this.totalcount = parseInt( _data.totalcount ); 

				this.listdata = _data;
				
			}else{
				this.$message.error( _data.des );
			}; 
		}).catch((err) => { 
			this.$message.error( err );
		}); 
     },
     mailhref(){
     	window.open('https://mail.chamc.com.cn:4443/owa');
     },
     publichref(){
     	window.open('http://kms.chamc.com.cn/WebPub/Office.html');
     },
     filehref(){
     	window.open('http://kms.chamc.com.cn/WebDoc');
     },
     handlehref(){
     	window.open('http://kms.chamc.com.cn/WebPub/Office.html');
     },
     businesshref(){
     	window.open('http://idmchamc.com.cn/portal');
     },
     meethref(){
     	window.open('http://kms.chamc.com.cn/meetingdoc');
     }
      
   } 
}
</script>

<style>
</style>