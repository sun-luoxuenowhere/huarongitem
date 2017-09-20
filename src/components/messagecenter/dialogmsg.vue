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
				<div v-if="data.billType=='6111'">
					<div class="y-dialog-body">
						<el-row :gutter="20" >
						  <el-col :span="8" v-for="(val,key) in newDatalist"><span>{{val}}</span>：<span>{{data.Datalist[key]}}</span></el-col>
						  
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
				    	<!--<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button>-->
				    	<el-button class="y-btn-search" type="danger" >我知道了</el-button>
				  	</div>
				</div>
				<div v-else-if="data.billType=='6117'">
					<div class="y-dialog-body">
						<el-row :gutter="20" >
						  <el-col :span="8" v-for="(val,key) in newDatalist"><span>{{val}}</span>：<span>{{data.Datalist[key]}}</span></el-col>
						  
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
				    	<!--<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button>-->
				    	<el-button class="y-btn-search" type="danger" >我知道了</el-button>
				  	</div>
				</div>
				<div v-else-if="data.billType=='6115'">
					<div class="y-dialog-body">
						<el-row :gutter="20" >
						  <el-col :span="8" v-for="(val,key) in newDatalist"><span>{{val}}</span>：<span>{{data.Datalist[key]}}</span></el-col>
						  
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
				    	<!--<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button>-->
				    	<el-button class="y-btn-search" type="danger" >我知道了</el-button>
				  	</div>
				</div>
				<div v-else-if="data.billType=='6113'">
					<div class="y-dialog-body">
						<el-row :gutter="20">
						  <el-col :span="8"  v-for="(val,key) in newDatalist"><span>{{val}}</span>：<span>{{data.Datalist[key]}}</span></el-col>
						  
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
				    	<!--<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button>-->
				    	<el-button class="y-btn-search" type="danger" >我知道了</el-button>
				  	</div>
				</div>
				<div v-else-if="data.billType=='6101'">
					<div class="y-dialog-body">
						<el-row :gutter="20" >
						  <el-col :span="8" v-for="(val,key) in newDatalist"><span>{{val}}</span>：<span>{{data.Datalist[key]}}</span></el-col>
						  
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
				    	<!--<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button>-->
				    	<el-button class="y-btn-search" type="danger" >我知道了</el-button>
				  	</div>
				</div>
				<div v-else>
					<div class="y-dialog-body">
						开发中。。。
					</div> 
				  	<div slot="footer" class="y-dialog-footer">
				    	<el-button class="y-btn-search" type="danger" @click="dialognone">我知道了</el-button>
				  	</div>
				</div>
			</el-dialog>
		</div>
		<div v-else-if="judgedialog=='inform'">
			
			<el-dialog :title="title"  :show-close="false" :visible="dialogvisible" size="tiny">
				<div v-show="data.msgsourcetype=='notice'">
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
				<div v-show="data.msgsourcetype=='pfbizmsg'||data.msgsourcetype=='worklist'">
					<div v-if="data.billType=='6111'">
						<div class="y-dialog-body">
							<el-row :gutter="20" >
							  <el-col :span="8" v-for="(val,key) in newDatalist"><span>{{val}}</span>：<span>{{data.Datalist[key]}}</span></el-col>
							  
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
					    	<!--<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button>-->
					    	<el-button class="y-btn-search" type="danger" >我知道了</el-button>
					  	</div>
					</div>
					<div v-else-if="data.billType=='6117'">
						<div class="y-dialog-body">
							<el-row :gutter="20" >
							  <el-col :span="8" v-for="(val,key) in newDatalist"><span>{{val}}</span>：<span>{{data.Datalist[key]}}</span></el-col>
							  
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
					    	<!--<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button>-->
					    	<el-button class="y-btn-search" type="danger" >我知道了</el-button>
					  	</div>
					</div>
					<div v-else-if="data.billType=='6115'">
						<div class="y-dialog-body">
							<el-row :gutter="20" >
							  <el-col :span="8" v-for="(val,key) in newDatalist"><span>{{val}}</span>：<span>{{data.Datalist[key]}}</span></el-col>
							  
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
					    	<!--<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button>-->
					    	<el-button class="y-btn-search" type="danger" >我知道了</el-button>
					  	</div>
					</div>
					<div v-else-if="data.billType=='6113'">
						<div class="y-dialog-body">
							<el-row :gutter="20">
							  <el-col :span="8"  v-for="(val,key) in newDatalist"><span>{{val}}</span>：<span>{{data.Datalist[key]}}</span></el-col>
							  
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
					    	<!--<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button>-->
					    	<el-button class="y-btn-search" type="danger" >我知道了</el-button>
					  	</div>
					</div>
					<div v-else-if="data.billType=='6101'">
						<div class="y-dialog-body">
							<el-row :gutter="20" >
							  <el-col :span="8" v-for="(val,key) in newDatalist"><span>{{val}}</span>：<span>{{data.Datalist[key]}}</span></el-col>
							  
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
					    	<!--<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button>-->
					    	<el-button class="y-btn-search" type="danger" >我知道了</el-button>
					  	</div>
					</div>
					<div v-else>
						<div class="y-dialog-body">
							开发中。。。
						</div> 
					  	<div slot="footer" class="y-dialog-footer">
					    	<el-button class="y-btn-search" type="danger" @click="dialognone">我知道了</el-button>
					  	</div>
					</div>
					
					
				</div>
			</el-dialog>
		</div>
		
		
		<!--提交弹框-->
		<div class="y-dialogmit">
			<el-dialog title="收货地址" :show-close="false" top='30%' :close-on-click-modal="false" :visible.sync="dialogFormVisible">
			  <div class="y-dialogsubmit-body">
			  	<!--书写理由-->
			  	<textarea placeholder="请输入内容" style="width:100%;height:100px;border:none;resize:none;outline:none;overflow-x:hidden;overflow-y:hidden"></textarea>
			  	<!--判断是否加签-->
			    <div>
			    	<template>
					  <el-select v-model="value5" filterable multiple placeholder="请选择加签用户">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
				    </template>
			    </div>
			  </div>
			  
			  <div slot="footer" class="dialog-footer">
			    <el-button class="y-btn-search" type="danger"  @click="dialogFormVisible = false">提交</el-button>
			    <el-button @click="dialogFormVisible = false">取 消</el-button>
			  </div>
			</el-dialog>
		</div>
		
	</div>
	
</template> 
<script>   
	
import Qs from 'qs';
//import SubmitDialog from '@/components/messagecenter/dialogsubmit';
export default {  
	props: ['dialogvisible','data','judgedialog'], 
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
		},
		newDatalist(){
			
			if(this.data==''){
				return '';
			}else{
				var objdata="";
//				console.log(this.data)
				//处理弹框为显示的字段
				if(this.data.billType=="6101"){//入职申请
					objdata=this.$store.state.Msgdata.entryrequest;
					return objdata;
				}else if(this.data.billType=="6111"){//转正申请
					objdata=this.$store.state.Msgdata.becomerequest;
					return objdata;
				}else if(this.data.billType=="6113"){//调配申请
					objdata=this.$store.state.Msgdata.tunerequest;
					return objdata;
				}else if(this.data.billType=="6117"){//兼职申请
					objdata=this.$store.state.Msgdata.partjobrequest;
					return objdata;
				}else if(this.data.billType=="6115"){//离职申请
					objdata=this.$store.state.Msgdata.leaverequest;
					return objdata;
				}
			}
			
		}
		
	},
	mounted(){
		
	},
	data(){
		return {
			dialogFormVisible:false,
			titleObj: {
				"notice": "通知消息",
				"prealert": "预警消息",
				"worklist": "待办消息"
			},
			options: [{
	          value: '选项1',
	          label: '黄金糕'
	        }, {
	          value: '选项2',
	          label: '双皮奶'
	        }, {
	          value: '选项3',
	          label: '蚵仔煎'
	        }, {
	          value: '选项4',
	          label: '龙须面'
	        }, {
	          value: '选项5',
	          label: '北京烤鸭'
	        }],
	        value5: []
		}
	},
	methods:{
		dialognone(){//暂时控制未开发的单据关闭；
			this.$emit('close');
		},
		beRead(){ 
//			var _msgpk = this.data.msgpk;
//			
//			//点击我知道了发送已读信息；
//			this.$http.post( this.url, Qs.stringify ({
//				"transType":'markreaded',
//				"msgpk": _msgpk
//			}), { 
//	          	headers: {
//	                'Content-Type': 'application/x-www-form-urlencoded;charset=gbk'
//	          	}
//	      	}).then(( response ) => {  
//				var _data = response.data;
//				if( _data.flag == "0" ){
//					this.$emit('read'); 
//				}else{
//					this.$message.error( _data.des );
//					this.$emit('close'); 
//				}; 
//			}).catch((err) => { 
//				this.$message.error( err );
//			}); 
		}
		
	} 
};
</script> 