<template>
	<div class="y-maincontent" style="padding-bottom: 200px;">
		<div class="y-breadcrumb-box">
			<el-breadcrumb separator="/">  
			  <el-breadcrumb-item>人事信息</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="y-row-box"> 
			<div id="userInfo" class="y-inner y-userinfo">  
				<div class="y-menu">
					<ul>
						<li> <a class="current" scroll-href="#jibenxinxi">基本信息</a> </li>
						<li> <a scroll-href="#gongzuo">工作记录</a> </li>
						<li> <a scroll-href="#lvli">履历记录</a> </li>
						<li> <a scroll-href="#hetong">合同信息</a> </li>
						<li> <a scroll-href="#xueli">学历信息</a> </li>
						<li> <a scroll-href="#shenfenzheng">身份证件</a> </li>
						<li> <a scroll-href="#jiating">家庭信息</a> </li>
						<li> <a scroll-href="#zhicheng">职称信息</a> </li>
						<li> <a scroll-href="#dangpai">参加党派记录</a> </li>
						<li> <a scroll-href="#jiangli">奖励情况</a> </li>
						<li> <a scroll-href="#psnOrg">人员组织关系</a> </li>
						<li> <a scroll-href="#ass">考核记录</a> </li>
						<li> <a scroll-href="#zhiye">职业资格</a> </li>
						<li> <a scroll-href="#jinji">紧急联系人</a> </li>
						<li> <a scroll-href="#yuyan">语言能力</a> </li>
					</ul>
				</div>
				<!-- 基本信息 begin -->
				<baseInfo :editabled="true"></baseInfo> 
				<!-- 基本信息 end -->
				<!-- 工作记录 begin -->
				<subList
					data-scroll="gongzuo"
					title='工作记录'  
					:infoSetCode="subDialogConfig.gongzuo.infoSetCode"
					:editabled="false"
					:theaddata='workTheadData'></subList> 
				<!-- 工作记录 end -->
				<!-- 履历记录 begin -->
				<subList 
					data-scroll="lvli"
					title='履历记录' 
					:ref="subDialogConfig.lvLi.infoSetCode" 
					:infoSetCode="subDialogConfig.lvLi.infoSetCode"
					:editabled="true"  
					:theaddata='jobTheadData' 
					@add="openLvliDialog"
					@delete="deleteList"
					@handle="handleList"></subList>
				<!-- 履历记录 end -->
				<!-- 合同信息 begin -->
				<subList
					data-scroll="hetong"
					title='合同信息'  
					:infoSetCode="subDialogConfig.hetong.infoSetCode"
					:editabled="false"
					:theaddata='hetongTheadData'></subList> 
				<!-- 合同信息 end -->
				<!-- 学历信息 begin -->
				<subList
					data-scroll="xueli"
					title='学历信息' 
					:ref="subDialogConfig.xueli.infoSetCode" 
					:infoSetCode="subDialogConfig.xueli.infoSetCode"
					:editabled="true"  
					:theaddata='xueliTheadData'
					@add="openXueliDialog"
					@delete="deleteList"
					@handle="handleList"></subList>
				<!-- 学历信息 end -->
				<!-- 身份证件 begin -->
				<subList 
					data-scroll="shenfenzheng"
					title='身份证件' 
					:ref="subDialogConfig.shenfenzheng.infoSetCode"
					:infoSetCode="subDialogConfig.shenfenzheng.infoSetCode"
					:editabled="true"  
					:theaddata='psncertTheadData'
					@add="openPsncertDialog"
					@delete="deleteList"
					@handle="handleList"></subList> 
				<!-- 身份证件 end -->
				<!-- 家庭信息 begin -->
				<subList ref="eduinfolist" 
					data-scroll="jiating"
					title='家庭信息' 
					:ref="subDialogConfig.jiating.infoSetCode"
					:infoSetCode="subDialogConfig.jiating.infoSetCode"
					:editabled="true"  
					:theaddata='jiatingTheadData'
					@add="openJiatingDialog"
					@delete="deleteList"
					@handle="handleList"></subList>
				<!-- 家庭信息 end -->
				<!-- 职称信息 begin -->
				<subList 
					data-scroll="zhicheng"
					title='职称信息' 
					:ref="subDialogConfig.zhicheng.infoSetCode"
					:infoSetCode="subDialogConfig.zhicheng.infoSetCode"
					:editabled="true"   
					:theaddata="zhichenTheadData"
					@add="openZhichenDialog"
					@delete="deleteList"
					@handle="handleList"></subList>
				<!-- 职称信息 end -->
				<!-- 参加党派记录 begin -->
				<subList 
					data-scroll="dangpai"
					title='参加党派记录' 
					:ref="subDialogConfig.dangpai.infoSetCode"
					:infoSetCode="subDialogConfig.dangpai.infoSetCode"
					:editabled="true"   
					:theaddata='dangpaiTheadData' 
					@add="openDangpaiDialog"
					@delete="deleteList"
					@handle="handleList"></subList>
				<!-- 参加党派记录 end --> 
				<!-- 奖励情况 begin -->
				<subList
					data-scroll="jiangli"
					title='奖励情况' 
					:ref="subDialogConfig.jiangli.infoSetCode"
					:infoSetCode="subDialogConfig.jiangli.infoSetCode"
					:editabled="true"  
					:theaddata='jiangliTheadData'
					@add="openJiangliDialog"
					@delete="deleteList"
					@handle="handleList"></subList>
				<!-- 奖励情况 end -->
				<!-- 华融人员组织关系 begin -->
				<subList
					data-scroll="psnOrg"
					title='华融人员组织关系'  
					:infoSetCode="subDialogConfig.psnOrg.infoSetCode"
					:editabled="false"
					:theaddata='psnOrgTheadData'></subList> 
				<!-- 华融人员组织关系 end -->
				
				<!-- 考核记录 begin -->
				<subList
					data-scroll="ass"
					title='考核记录' 
					:ref="subDialogConfig.ass.infoSetCode"
					:infoSetCode="subDialogConfig.ass.infoSetCode"
					:editabled="false"  
					:theaddata='assTheadData'>
				</subList>
				<!-- 考核记录 end -->
				
				<!--职业资格begin-->
				<subList
					data-scroll="zhiye"
					title='职业资格' 
					:ref="subDialogConfig.zhiye.infoSetCode"
					:infoSetCode="subDialogConfig.zhiye.infoSetCode"
					:editabled="false"  
					:theaddata='zhiyeTheadData'>
				</subList>
				
				<!-- 职业资格 end -->
				<!-- 紧急联系人 begin -->
				<subList
					data-scroll="jinji"
					title='紧急联系人' 
					:ref="subDialogConfig.jinji.infoSetCode"
					:infoSetCode="subDialogConfig.jinji.infoSetCode"
					:editabled="true"  
					:theaddata='jinjiTheadData'
					@add="openjinjiDialog"
					@delete="deleteList"
					@handle="handleList"></subList>
				<!-- 紧急联系人 end -->
				
				<!-- 语言能力 begin -->
				<subList
					data-scroll="yuyan"
					title='语言能力' 
					:ref="subDialogConfig.yuyan.infoSetCode"
					:infoSetCode="subDialogConfig.yuyan.infoSetCode"
					:editabled="true"  
					:theaddata='yuyanTheadData'
					@add="openyuyanDialog"
					@delete="deleteList"
					@handle="handleList"></subList>
				<!-- 语言能力 end -->
				
				<!-- 附件开始 -->
				<div class="y-module"> 
					
					<div class="y-title" style="border-bottom: none;"> 
						<el-upload
						  class="upload-demo"
						   ref="newupload"
						  action="service/EHRWebSmServlet"
						  :on-success="handleSuccess"
						  :file-list="fileList3"
						  :before-upload="beforeAvatarUpload">
						  <el-button size="small" type="text" class="y-title" style='border-bottom: none;'>附件上传&nbsp;<i style="color: #CC2123;" class="iconfont icon-tianjia"></i></el-button>
						  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
						</el-upload>
					</div>
				</div>
				<!-- 附件结束 -->
			</div> 
		</div>
		<subDialog 
			title="履历记录"
			:visible="subDialogConfig.lvLi.visible" 
			:formConfig="jobFormConfig"
			:formData="lvliFormData" 
			@close="subDialogConfig.lvLi.visible = false" 
			@submit="savePersonInfo"></subDialog>   
		<subDialog 
			title="学历信息"
			:visible="subDialogConfig.xueli.visible" 
			:formConfig="xueliFormConfig"
			:formData="xueliFormData"
			@close="subDialogConfig.xueli.visible = false" 
			@submit="savePersonInfo"></subDialog>  
		<subDialog 
			title="身份证"
			:visible="subDialogConfig.shenfenzheng.visible" 
			:formConfig="psncertFormConfig"
			:formData="psncertFormData"
			@close="subDialogConfig.shenfenzheng.visible = false" 
			@submit="savePersonInfo"></subDialog> 
		<subDialog 
			title="家庭信息"
			:visible="subDialogConfig.jiating.visible" 
			:formConfig="jiatingFormConfig"
			:formData="jiatingFormData"
			@close="subDialogConfig.jiating.visible = false" 
			@submit="savePersonInfo"></subDialog> 
		<subDialog 
			title="职称信息"
			:visible="subDialogConfig.zhicheng.visible" 
			:formConfig="zhichenFormConfig"
			:formData="zhichenFormData"
			@close="subDialogConfig.zhicheng.visible = false" 
			@submit="savePersonInfo"></subDialog> 
		<subDialog 
			title="党派信息"
			:visible="subDialogConfig.dangpai.visible" 
			:formConfig="dangpaiFormConfig"
			:formData="dangpaiFormData"
			@close="subDialogConfig.dangpai.visible = false" 
			@submit="savePersonInfo"></subDialog>
		<subDialog 
			title="奖励信息"
			:visible="subDialogConfig.jiangli.visible" 
			:formConfig="jiangliFormConfig"
			:formData="jiangliFormData" 
			@close="subDialogConfig.jiangli.visible = false" 
			@submit="savePersonInfo"></subDialog>
			
		<subDialog 
			title="紧急联系人"
			:visible="subDialogConfig.jinji.visible" 
			:formConfig="jinjiFormConfig"
			:formData="jinjiFormData" 
			@close="subDialogConfig.jinji.visible = false" 
			@submit="savePersonInfo"></subDialog>
		
		<subDialog 
			title="语言能力"
			:visible="subDialogConfig.yuyan.visible" 
			:formConfig="yuyanFormConfig"
			:formData="yuyanFormData" 
			@close="subDialogConfig.yuyan.visible = false" 
			@submit="savePersonInfo"></subDialog>
			
	</div>
</template>
<script>
import Qs from 'qs';
import {scrollSpy} from '@/assets/js/scrollspy.js'; 
import { ajaxData } from '@/assets/js/ajaxdata.js';

import baseInfo from './components/base';
import subList from './components/sublist'; 
import subDialog from './components/subdialog'; //弹窗 
var UserInfo;
export default {
	data() {
		return {    
			lvliFormData: '', //履历初始数据 
			hetongFormData: '', //合同初始数据 
			xueliFormData: '', //合同初始数据 
			psncertFormData: '', //身份证初始数据 
			jiatingFormData: '', //家庭初始数据 
			zhichenFormData: '', //职称初始数据 
			dangpaiFormData: '', //党派初始数据  
			jiangliFormData: '', //奖励初始数据   
			jinjiFormData: '', //紧急联系人初始数据 
			yuyanFormData: '', //语言初始数据 
			
			fileList3: [],
			currentDialog: { //当前显示的子集弹窗相关数据
				infoSetCode: '',  //弹窗类型
				operate: '', //弹窗操作
				index: 0 //列表索引
			}, 
			subDialogConfig: {
				gongzuo: { infoSetCode: "hi_psnjob"},
				lvLi: { infoSetCode: "hi_psndoc_work", visible: false },
				hetong: { infoSetCode: "hi_psndoc_ctrt"},
				xueli: { infoSetCode: "hi_psndoc_edu", visible: false },
				shenfenzheng: { infoSetCode: "hi_psndoc_cert", visible: false},
				jiating: {  infoSetCode: "hi_psndoc_family", visible: false},
				zhicheng: { infoSetCode: "hi_psndoc_title", visible: false},
				dangpai: { infoSetCode: "hi_psndoc_partylog", visible: false},
				jiangli: { infoSetCode: "hi_psndoc_enc", visible: false},
				psnOrg: { infoSetCode: "hi_psnorg"},
				ass: { infoSetCode: "hi_psndoc_ass"},
				zhiye: { infoSetCode: "hi_psndoc_nationduty"},
				jinji: { infoSetCode: "hi_psndoc_linkman", visible: false},
				yuyan: { infoSetCode: "hi_psndoc_langability", visible: false}
			}
		}
	},
	created(){
		UserInfo = JSON.parse( window.localStorage.getItem("usermsg") );//获取人员信息
	},
	mounted(){
		var _interface = this.$store.state.Interface.information;  
		scrollSpy( document.querySelectorAll('#userInfo') );
	},
	computed:{   
		//获取基本信息数据 
		baseInfo(){ return this.getData("baseInfo"); },
		//工作记录
		workTheadData(){ return this.getData("workTheadData"); },  //表头
		
		//履历记录
		jobTheadData(){ return this.getData("jobTheadData"); },  //表头
		jobFormConfig(){ return this.getData("jobFormConfig"); }, //表单
		jobFormRule(){ return this.getData("jobFormRule"); }, //校验规则
		
		//合同信息 
		hetongTheadData(){ return this.getData("hetongTheadData"); }, //表头 
		//学历信息
		xueliTheadData(){ return this.getData("xueliTheadData"); }, //表头
		xueliFormConfig(){  return this.getData("xueliFormConfig"); }, //表单
		
		//身份证件
		psncertTheadData(){ return this.getData("psncertTheadData"); },  //表头
		psncertFormConfig(){ return this.getData("psncertFormConfig"); }, //表单
		
		//家庭信息
		jiatingTheadData(){ return this.getData("jiatingTheadData"); }, //表头
		jiatingFormConfig(){ return this.getData("jiatingFormConfig"); }, //表单
		
		//职称 
		zhichenTheadData(){ return this.getData("zhichenTheadData"); }, //表头
		zhichenFormConfig(){ return this.getData("zhichenFormConfig"); }, //表单
		
		//党派
		dangpaiTheadData(){ return this.getData("dangpaiTheadData");  },  //表头
		dangpaiFormConfig(){ return this.getData("dangpaiFormConfig"); }, //表单
		
		//奖励
		jiangliTheadData(){ return this.getData("jiangliTheadData"); }, //表头
		jiangliFormConfig(){ return this.getData("jiangliFormConfig"); }, //表单
		
		//华融人员组织关系
		psnOrgTheadData(){ return this.getData("psnOrgTheadData"); }, //表头
		
		//考核记录
		assTheadData(){ return this.getData("assTheadData"); }, //表头
		//职业资格
		zhiyeTheadData(){ return this.getData("zhiyeTheadData"); }, //表头
		//紧急联系人
		jinjiTheadData(){ return this.getData("jinjiTheadData"); }, //表头
		jinjiFormConfig(){ return this.getData("jinjiFormConfig"); }, //表单
		//语言能力
		yuyanTheadData(){ return this.getData("yuyanTheadData"); }, //表头
		yuyanFormConfig(){ return this.getData("yuyanFormConfig"); }, //表单
	},  
	components: {
		baseInfo, //基本信息
		subList, //人员子集列表 
		subDialog //人员子集弹窗 
	}, 
	methods: {
		//附件上传
		beforeAvatarUpload(file){
			//上传之前判断格式及大小；成功之后可以继续上传;
		},
		handleSuccess(response,file, fileList) {
			console.log(response)
			console.log(fileList.slice(-3));
       	 	this.fileList3 = fileList.slice(-3);
      },
		//获取 stroe中存的静态数据
		getData( key ){
			return this.$store.state.Information[key];
		}, 
		//设置当前备操作弹窗的操作类型、被编辑或者修改的列 行号
		setCurrentDialog( data ){ 
			if( data[2] ){
				this.currentDialog.index = data[2].recordnum;
			}; 
			this.currentDialog.operate = data[0]; 
			this.currentDialog.infoSetCode = data[1]; 
		}, 
		//保存履历 | 工作| 教育等信息
		savePersonInfo( data ){     
			var _data = data;  
			var _code = this.currentDialog.infoSetCode;  
			var _paramData = {
				
				"pk_psndoc":UserInfo.pk_psndoc,
		    	"cuserid":UserInfo.cuserid,
		    	"pk_group":UserInfo.pk_group,
		    	"pk_org": UserInfo.pk_org,
				"transType": "psnInfoSave",  
				"infoSetCode": _code,
				"jsonStr": JSON.stringify( _data ) 
			};
			switch( this.currentDialog.operate ){
				case 'add':
					_paramData.status = 2;
					break;
				case 'edit':
					_paramData.status = 1;
					_paramData.recordnum = this.currentDialog.index; 
					break;
				case 'remove':
					_paramData.status = 3;
					_paramData.recordnum = this.currentDialog.index; 
					break;
			};   
			ajaxData( this.$store.state.Interface.information, _paramData, (res) => {   
				this.hideDialog( _code ); 
				this.$refs[ _code ].loadData(); 
			}); 
		}, 
		//隐藏弹窗
		hideDialog( code ){  
			switch( code ){
				case 'hi_psndoc_work':
					this.subDialogConfig.lvLi.visible = false; 
				break;
				case 'hi_psndoc_edu':
					this.subDialogConfig.xueli.visible = false; 
				break;
				case 'hi_psndoc_cert':
					this.subDialogConfig.shenfenzheng.visible = false; 
				break;
				case 'hi_psndoc_family':
					this.subDialogConfig.jiating.visible = false; 
				break;
				case 'hi_psndoc_title':
					this.subDialogConfig.zhicheng.visible = false; 
				break;
				case 'hi_psndoc_partylog':
					this.subDialogConfig.dangpai.visible = false; 
				break;
				case 'hi_psndoc_enc':
					this.subDialogConfig.jiangli.visible = false; 
				break;
				case 'hi_psndoc_linkman':
					this.subDialogConfig.jinji.visible = false; 
				break;
				case 'hi_psndoc_langability':
					this.subDialogConfig.yuyan.visible = false; 
				break;
				
			};
			
		},
		//还原提交收回履历 | 工作| 教育等信息
		handleList( data ){  
			var _code = data[1];
			ajaxData(this.$store.state.Interface.information, {
				"transType": 'psnInfoHandle', 
				"infoSetCode": _code,
				"way": data[0]
			}, (res) => {   
				this.$refs[_code].loadData();  
			});
			
		},
		//删除履历 | 工作| 教育等信息
		deleteList( data ){ 
			this.setCurrentDialog( data );
			this.savePersonInfo( data[2] );
		},
		//打开履历操作弹窗
		openLvliDialog( data ){
			var initData = {
				"begindate": "",
				"enddate": "",
				"workcorp": "",
				"workdept": "",
				"workpost": "",
				"workjob": "",
				"certifier": "",
				"memo": "",
				"workduty":"",
				"glbdef2":"",
				"glbdef3":"",
				"workachive":"",
				"work_addr":"",
				"dimission_reason":"",
				"linkphone":"",
				"certiphone":""
			};
			switch( data[0] ){
				case "add":
					this.lvliFormData = initData;
					break;
				case 'edit':  
					this.lvliFormData = this.editFormData( initData,  data[2]);  
					break;
			};  
			this.setCurrentDialog( data );
			this.subDialogConfig.lvLi.visible = true; 
		}, 
		//打开学历操作弹窗
		openXueliDialog( data ){
			var initData = {
				"enddate": "",
				"begindate": "",
				"school": "",
				"schooltype": "",
				"glbdef2": "",
				"major": "",
				"majortype": "",
				"education": "",
				"pk_degree": "",
				"studymode": "",
				"lasteducation": "",
				"edusystem": "",
				"degreedate": "",
				"degreeunit": "",
				"educationctifcode": "",
				"certifcode": "",
				"memo": "",
				"glbdef5": "",
				"glbdef3": "",
				"glbdef4": "",
				"glbdef1": "",}; 
			switch( data[0] ){
				case "add": 
					initData.lasteducation = 'N';
					initData.glbdef5 = 'N';
					initData.glbdef1 = 'N';
					this.xueliFormData = initData;
					break;
				case 'edit': 
					this.xueliFormData = this.editFormData( initData,  data[2]);  
					break;
			};  
			this.setCurrentDialog( data );
			this.subDialogConfig.xueli.visible = true; 
		},
		//打开身份证弹窗
		openPsncertDialog( data ){
			var initData = {
				"idtype": "",
				"id": "",
				"begindate": "",
				"enddate": "",
				"extend_org": "" ,
				"iseffect": "",
				"isstart": "",
				"memo": ""
			};
			switch( data[0] ){
				case "add":
					this.psncertFormData = initData;
					break;
				case 'edit': 
					this.psncertFormData = this.editFormData( initData,  data[2]);  
					break;
			}; 
			this.setCurrentDialog( data );
			this.subDialogConfig.shenfenzheng.visible = true; 
		},
		//打开家庭弹窗
		openJiatingDialog( data ){
			var initData = {
				"mem_relation": "",
				"mem_name": "",
				"mem_birthday": "",
				"mem_corp": "",
				"glbdef1": "",
				"glbdef2": "",
				"glbdef3": "",
				"glbdef4": "",
				"glbdef5": "",
				"glbdef9": "",
				"glbdef8": "",
				"glbdef6": "",
				"mem_job": "",
				"glbdef10": "",
				"relaaddr": "",
				"profession": "",
				"politics": "",
				"glbdef7": "",
				"memo": ""
			};
			switch( data[0] ){
				case "add":
					this.jiatingFormData = initData;
					break;
				case 'edit': 
					this.jiatingFormData = this.editFormData( initData,  data[2]); 
					break;
			}; 
			this.setCurrentDialog( data );
			this.subDialogConfig.jiating.visible = true;  
		},
		//打开职称弹窗
		openZhichenDialog( data ){
			var initData = {
				"begindate": "",
				"enddate": "",
				"pk_techposttitle": "",
				"titlerank": "",
				"assorg": "", 
				"certifcode": "", 
				"tiptop_flag": "",
				"achive": "",
				"strongsuit": "",
				"summ": "",
				"glbdef1": ""
			};
			switch( data[0] ){
				case "add":
					this.zhichenFormData = initData;
					break;
				case 'edit': 
					this.zhichenFormData = this.editFormData( initData,  data[2]); 
					break;
			}; 
			this.setCurrentDialog( data );
			this.subDialogConfig.zhicheng.visible = true;  
		},
		//打开党派弹窗
		openDangpaiDialog( data ){
			var initData = {
				"begindate": "",
				"enddate": "",
				"partydate": "",
				"partyname": "",
				"partyunit": "", 
				"partypsn": "", 
				"partyduedate": "", 
				"exreason": "", 
				"exsort": "", 
				"glbdef4": "", 
				"glbdef1": "", 
				"glbdef2": "", 
				"glbdef3": ""
			};
			switch( data[0] ){
				case "add":
					this.dangpaiFormData = initData;
					break;
				case 'edit': 
					this.dangpaiFormData = this.editFormData( initData,  data[2]); 
					break;
			}; 
			this.setCurrentDialog( data );
			this.subDialogConfig.dangpai.visible = true; 
		},
		//打开奖励弹窗
		openJiangliDialog( data ){
			
			var initData = {
				"encourdate": "",
				"encourtype": "",
				"encourrank": "",
				"encourorg": "",
				"encourmatter": "",
				"encourmeas": ""				
			};
			switch( data[0] ){
				case "add":
					this.jiangliFormData = initData;
					break;
				case 'edit': 
					this.jiangliFormData = this.editFormData( initData,  data[2]); 
					break;
			}; 
			this.setCurrentDialog( data );
			this.subDialogConfig.jiangli.visible = true;  
		},
		//打开紧急弹窗
		openjinjiDialog( data ){
			
			var initData = {
				"linkman": "",
				"relation": "",
				"ismain": "",
				"linkaddr": "",
				"postalcode": "",
				"officephone": "",
				"homephone": "",
				"mobile": "",
				"fax": "",
				"email": ""
				
			};
			switch( data[0] ){
				case "add":
					this.jinjiFormData = initData;
					break;
				case 'edit': 
					this.jinjiFormData = this.editFormData( initData,  data[2]); 
					break;
			}; 
			this.setCurrentDialog( data );
			this.subDialogConfig.jinji.visible = true;  
		},
		//打开语言弹窗
		openyuyanDialog( data ){
			
			var initData = {
				"langsort": "",
				"langskill": "",
				"langlev": "",
				"certifname": "",
				"certifcode": "",
				"certifdate": "",	
				"memo": ""
			};
			switch( data[0] ){
				case "add":
					this.yuyanFormData = initData;
					break;
				case 'edit': 
					this.yuyanFormData = this.editFormData( initData,  data[2]); 
					break;
			}; 
			this.setCurrentDialog( data );
			this.subDialogConfig.yuyan.visible = true;  
		},
		
		//编辑子集信息表单时候的数据补全
		editFormData( sdata, cdata ){
			var _obj = {};
			for( var i in sdata ){
				_obj[i] = ( cdata[i] ? cdata[i] : sdata[i] );
			};
			return _obj;
		}
	}
}
</script> 