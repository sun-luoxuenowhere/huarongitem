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
							
						</table>  
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
			<el-dialog :title="title"  :show-close="false" :visible="dialogvisible" size="tiny">
				<div v-show="true">
					<div></div>
					<div class="y-dialog-body">
						<el-row :gutter="20">
						  <el-col :span="8"><span>人员信息</span>：<span>哈哈等等等等等等等等</span></el-col>
						  <el-col :span="8"><span>人员信息</span>：<span>哈哈</span></el-col>
						  <el-col :span="8"><span>人员信息</span>：<span>哈哈</span></el-col>
						</el-row>
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
							<!--<tr v-if="data.attach && data.attach.length > 0">
								<td>附件 :</td>
								<td><a v-for="item in data.attach" :href="item.filesrc" target="_blank">{{item.filename}}</a></td>
							</tr>-->
						</table>  
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
//			var _type = this.data.msgtype;
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
				"worklist": "代办消息"
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