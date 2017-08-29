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
				  	<div id="fontstyle">绩效测评</div>
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
					    	 <span slot="label">待办事项<i v-show="totalshow==0" class="iconfont iconfontmain icon-xiaoxi"><span class="messagetatal">{{listdata.totalcount}}</span></i></span>
					    	<li class="L-list clearfix" v-for="(item, index) in listdata.msglist" >
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
					    	<li class="L-list clearfix" v-for="(item, index) in listdata.msglist">
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
					    	<li class="L-list clearfix" v-for="(item, index) in listdata.msglist" >
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
					    		<el-col :span="8" class="system">
					    			<div class="systemback  L-qianblue"><i class="iconfont iconfontsize icon-youjian"></i>
					    				<span class="systembackmsg">12</span>
					    			</div>
					    			<div class="systemcolor">邮件系统</div>
					    		</el-col>
					    		
					    		<el-col :span="8" class="system">
					    			<div class="systemback  L-qianyellow"><i class="iconfont iconfontsize icon-gonggao"></i></div>
					    			<div class="systemcolor">公共通知</div>
					    		</el-col>
					    		<el-col :span="8" class="system ">
					    			<div class="systemback L-shenred"><i class="iconfont iconfontsize icon-wenjian"></i></div>
					    			<div class="systemcolor">文件系统</div>
					    		</el-col>
					    		<el-col :span="8" class="system">
					    			<div class="systemback  L-green"><i class="iconfont iconfontsize icon-daiban"></i></div>
					    			<div class="systemcolor">办公待办</div>
					    		</el-col>
					    		<el-col :span="8" class="system">
					    			<div class="systemback  L-yellew"><i class="iconfont iconfontsize icon-yewu"></i></div>
					    			<div class="systemcolor">业务待办</div>
					    		</el-col>
					    		<el-col :span="8" class="system">
					    			<div class="systemback L-blue"><i class="iconfont iconfontsize icon-huiyiziliao"></i></div>
					    			<div class="systemcolor">会议资料</div>
					    		</el-col>
					    		
					    	</el-row>
					    	
					    </el-tab-pane>
					    
					</el-tabs>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	
export default{
	computed: {
		url(){  
			return this.$store.state.Interface.msglist;
		} 
	},
	data(){
		return { 
			 activeName: 'first',
			 activeName1: 'first',
			 activeName2: 'first',
			 totalshow:0,
			 msgparam: {
				sendstr: '',
				isread: 'N',
				user_code: '00030',
				transtype: 'msglist',
				msgtype: '', 
				pageindex: 0,
				ishandled: 'N',
				pagesize: 4
			},
			listdata:''
		}
	},
	mounted(){
		this.loadMsg( 'worklist'); //初始显示流程消息数据
		
	},
	methods: {
      handleClick(tab, event) {
      	if(tab.index=="0"){
      		this.loadMsg( 'worklist');
      		this.totalshow=0;
      		
      	}else if(tab.index=="1"){
      		this.loadMsg('notice');
      		this.totalshow=1;
      	}else if(tab.index=="2"){
      		this.loadMsg('prealert');
      		this.totalshow=2;
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
      	
      	this.msgparam.msgtype = type;
      	var _param = this.msgparam;
		this.$http.get( this.url, {
				params: _param
			}).then((response) => {  
				Loading.service(options);
				var _data = response.data;
				console.log(_data)
				this.listdata=_data
				
				if( _data.flag == "1" ){ //操作失败
					this.$message.error( _data.des );
				}else{
					
				};  
	    	}).catch((err) => { 
	    		 
	    		this.$message.error( '待办事项加载数据失败' );  
			});        	
      }
      
   } 
}
</script>

<style>
</style>