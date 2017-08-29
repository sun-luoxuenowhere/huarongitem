<template>  
	<div class="y-msg-dialog">
		<el-dialog :title="title" :show-close="false" :visible="dialogvisible" size="tiny">
			<div v-show="true">
				<div class="y-dialog-body">
					<table class="y-info-list">
						<tr>
							<td>发送人:</td>
							<td>{{data.sender}}</td>
						</tr>
						<tr>
							<td>时间:</td>
							<td>{{data.sendtime}}</td>
						</tr>
						<tr>
							<td>类型:</td>
							<td>{{title}}</td>
						</tr>
						<tr>
							<td>主题:</td>
							<td>{{data.subject}}</td>
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
			<div v-show="false">
				<div class="y-dialog-body">
					<span>这是一段信息{{dialogvisible}} {{data}}</span>
					<p>{{data.subject}}</p>
				</div> 
			  	<div slot="footer" class="y-dialog-footer">
			    	<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button> 
			  	</div>
			</div>
			<div v-show="false">
				<div class="y-dialog-body">
					<span>这是一段信息{{dialogvisible}} {{data}}</span>
					<p>{{data.subject}}</p>
				</div> 
			  	<div slot="footer" class="y-dialog-footer">
			    	<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button> 
			  	</div>
			</div>
		</el-dialog>
	</div>
</template> 
<script>   
export default {  
	props: ['dialogvisible', 'data'], 
	computed: {
		url(){  
			return this.$store.state.Interface.msglist;
		},
		title(){
			var _type = this.data.msgtype;
			return this.titleObj[_type];
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
			this.$http.get( this.url, {
				params: {
					"transtype": 'markReaded',
					"msgpk": _msgpk
				}
			}).then((response) => {   
				var _data = response.data;
				
				if( _data.flag == "0" ){
					this.$emit('read'); 
				}else{
					this.$message.error( _data.des );
					this.$emit('close'); 
				};
				
	    	}).catch((err) => { 
	    		debugger;
			});  
		} 
	} 
};
</script> 