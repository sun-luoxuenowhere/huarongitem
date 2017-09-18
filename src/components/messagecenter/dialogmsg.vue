<template>  
	<div class="y-msg-dialog">
		<!--<el-dialog :title="title" :show-close="false" :visible="dialogvisible" size="tiny">-->
		<div v-if="judgedialog=='warning'">
			<el-dialog :title="title"  :show-close="false" :visible="dialogvisible" size="tiny">
				<div v-show="true">
					<div class="y-dialog-body">
						<table class="y-info-list">
							<tr>
								<td>主题:</td>
								<td>{{data.subject}}</td>
							</tr>
							
							<tr>
								<td>发送人:</td>
								<td>{{data.sender}}</td>
							</tr>
							<tr>
								<td>时间:</td>
								<td>{{data.sendtime}}</td>
							</tr>
							
							<tr>
								<td>内容 :</td>
								<td>{{data.content}}</td>
							</tr>
							<tr v-if="data.attach && data.attach.length > 0">
								<td>附件 :</td>
								<td><a v-for="item in data.attach" :href="item.filesrc" target="_blank">{{item.filename}}</a></td>
							</tr>
						</table>  
					</div> 
				  	<div slot="footer" class="y-dialog-footer">
				    	<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button> 
				  	</div>
				</div>
				
			</el-dialog>
		</div>
		<div v-else-if="judgedialog=='handle'">
			<el-dialog :title="title"  :show-close="false" :visible="dialogvisible" size="tiny">
				<div v-show="true">
					<div class="y-dialog-body">
						<el-row :gutter="20">
						  <el-col :span="8"><span>申请单编码</span>：<span>{{data.subject}}</span></el-col>
						  <el-col :span="8"><span>入职人</span>：<span>{{data.sender}}</span></el-col>
						  <el-col :span="8"><span>入职岗位</span>：<span>{{data.sendtime}}</span></el-col>
						  <el-col :span="8"><span>入职职务</span>：<span>{{data.content}}</span></el-col>
						  <el-col :span="8"><span>人员类别</span>：<span>{{data.content}}</span></el-col>
						  <el-col :span="8"><span>入职日期</span>：<span>{{data.content}}</span></el-col>
						</el-row>
						<el-row :gutter="20">
						  <el-col :span="4"><span>审批进度：</span></el-col>
						  <el-col :span="20">
						  	<div >
						  		<div class="dialoghistop" >主管审核</div>
						  		<div class="clearfix" style="border-left:1px dashed #999999;position: relative;padding-bottom: 12px;">
						  			<div style="float: left;position: absolute;left: -16px;">
						  				<img class="dialogimg" src="../../assets/img/user.jpg"/>
						  			</div>
						  			<div class="dialogpingyu">
						  				<div class="dialogsanjiao"></div>
						  				<div class="clearfix">
						  					<div style="float: left;">
						  						<i class="iconfont icon-shouye"></i>
							  					<span>刘晓丽</span>
						  					</div>
							  				<div style="float: right;"><span>2017-08-09 16:30:20</span></div>
						  				</div>
						  				<div><span>驳回理由</span>：<span>项目比较急，过两天再批过两天</span></div>
						  			</div>
						  		</div>
						  	</div>
						  	
						  	<div >
						  		<div class="dialoghistop" style="border-left:1px dashed #999999;">主管审核</div>
						  		<div class="clearfix" style="position: relative;">
						  			<div style="float: left;position: absolute;left: -16px;">
						  				<img class="dialogimg" src="../../assets/img/user.jpg"/>
						  			</div>
						  			<div class="dialogpingyu">
						  				<div class="dialogsanjiao"></div>
						  				<div class="clearfix">
						  					<div style="float: left;">
						  						<i class="iconfont icon-shouye"></i>
							  					<span>刘晓丽</span>
						  					</div>
							  				<div style="float: right;"><span>2017-08-09 16:30:20</span></div>
						  				</div>
						  				<div><span>驳回理由</span>：<span>项目比较急，过两天再批过两天</span></div>
						  			</div>
						  		</div>
						  	</div>
						  </el-col>
						</el-row>
					</div> 
				  	<div slot="footer" class="y-dialog-footer">
				    	<el-button class="y-btn-search" type="danger" >同意</el-button> 
				    	<el-button class="y-btn-search" type="danger" >不同意</el-button> 
				    	<el-button class="y-btn-search" type="danger" >驳回</el-button> 
				    	<el-button class="y-btn-search" type="danger" >加签</el-button> 
				  	</div>
				</div>
				
			</el-dialog>
		</div>
		<div v-else-if="judgedialog=='inform'">
		<!--<div v-else-if="'inform'=='inform'">-->
			<el-dialog :title="title"  :show-close="false" :visible="dialogvisible" size="tiny">
				<div v-show="true">
					
					<div class="y-dialog-body">
						<el-row :gutter="20">
						  <el-col :span="8"><span>主题</span>：<span>{{data.subject}}</span></el-col>
						  <el-col :span="8"><span>发送人</span>：<span>{{data.sender}}</span></el-col>
						  <el-col :span="8"><span>时间</span>：<span>{{data.sendtime}}</span></el-col>
						  <el-col :span="8"><span>内容</span>：<span>{{data.content}}</span></el-col>
						</el-row>
						
					</div> 
				  	<div slot="footer" class="y-dialog-footer">
				    	<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button> 
				  	</div>
				</div>
				
			</el-dialog>
		</div>
	</div>
</template> 
<script>   
	
import Qs from 'qs';

export default {  
	props: ['dialogvisible', 'data','judgedialog'], 
	computed: {
		url(){  
			return this.$store.state.Interface.msglist;//后端接口；
		},
		title(){
//			var _type = this.data.msgType;
			if(this.judgedialog=='warning'){
				return this.titleObj['prealert'];
			}else if(this.judgedialog=='inform'){
				return this.titleObj['notice'];
			}else if(this.judgedialog=='handle'){
				return this.titleObj['worklist'];
			}
		}
	},
	data(){
		return {
			titleObj: {
				"notice": "通知消息",
				"prealert": "预警消息",
				"worklist": "待办消息"
			}
		}
	},
	methods:{
		beRead(){ 
			var _msgpk = this.data.msgpk;
			
			//点击我知道了发送已读信息；
			this.$http.post( this.url, Qs.stringify ({
				"transType":'markreaded',
				"msgpk": _msgpk
			}), { 
	          	headers: {
	                'Content-Type': 'application/x-www-form-urlencoded;charset=gbk'
	          	}
	      	}).then(( response ) => {  
				var _data = response.data;
				if( _data.flag == "0" ){
					this.$emit('read'); 
				}else{
					this.$message.error( _data.des );
					this.$emit('close'); 
				}; 
			}).catch((err) => { 
				this.$message.error( err );
			}); 
		} 
	} 
};
</script> 