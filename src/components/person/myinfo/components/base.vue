<template>
	<el-form class="y-baseinfo-form" ref="myForm" :model="formData" :rules="rules" label-position="left">    
		<!-- y-module-baseinfo begin 基本信息表单 [头像区域]-->
		<div class="y-module y-module-baseinfo clearfix">
			<!-- 按钮操作区域 begin -->
			<div class="y-operate">
				<i @click="showBtnsBase1" v-show="!btnsBase1" class="iconfont icon-bianji y-text-bianji"></i>
				<yFormBtns v-show="btnsBase1" 
					:status="status" 
					@save="saveBase"
					@cancle="cancleBase1"
					@handle="handleBase"></yFormBtns>
			</div>
			<!-- 按钮操作区域 end -->
			<div class="y-content">
				<!-- 表单区域 begin -->
				<el-row v-show="editBase1" :gutter="5">
					<template v-for="(val,key) in formDataConfig1"> 
						<el-col v-if="iconForm.indexOf(val.id) > -1" :xs="24" :sm="12" :md="8" :lg="8"> 
							<div class="y-icon-item">
								<i class="iconfont" :class="iconCls[val.id]"></i>
								<yInput :class="alterFields.indexOf(val.id) > -1 ? 'y-alter-item' : ''" v-model="formData[key]" :inputData="formDataConfig1[key]" :initVal="formData[key]"></yInput>
							</div>
						</el-col>
						<el-col v-else :xs="24" :sm="12" :md="12" :lg="12" >
							<div class="y-box-base y-box-photo" v-if="val.id == 'photo'">
								<img :src="'data:image/png;base64,' + formData[key]" />
							</div> 
							<yInput v-else :class="alterFields.indexOf(val.id) > -1 ? 'y-alter-item' : ''" v-model="formData[key]" :inputData="formDataConfig1[key]" :initVal="formData[key]"></yInput>
						</el-col>	
					</template> 
				</el-row>
				<!-- 表单区域 end -->
				
				<!-- 视图区域 begin -->
				<el-row v-show="!editBase1" :gutter="5">
					<template v-for="(val,key) in formDataConfig1"> 
						<el-col v-if="iconForm.indexOf(val.id) > -1" :xs="24" :sm="12" :md="8" :lg="8"> 
							<div class="y-icon-item">
								<i class="iconfont" :class="iconCls[val.id]"></i>
								<el-input v-model="formData[key]" :title="formData[key]" :disabled="true"> </el-input>
							</div> 
						</el-col>
						<el-col v-else :xs="24" :sm="12" :md="12" :lg="12">
							<div class="y-box-base y-box-photo" v-if="val.id == 'photo'">
								<img :src="'data:image/png;base64,' + formData[key]" />
							</div> 
							<el-form-item :class="alterFields.indexOf(val.id) > -1 ? 'y-alter-item' : ''" v-else :label="val.text"> 
								<el-input v-model="formDataConfig1[key].typedata[0][formData[key]]" v-if="formDataConfig1[key].type == 'radio'" :disabled="true"> </el-input>
								<el-input v-model="formData[key]" v-else :disabled="true"> </el-input>
							</el-form-item>
						</el-col>
					</template> 
				</el-row>
				<!-- 视图区域 end -->
			</div>
		</div>
		<!-- y-module-baseinfo end -->
		<!-- 基本信息表单 [头像下方区域]-->
		<div class="y-module y-module-baseinfo2" data-scroll="jibenxinxi">
			<div class="y-title">
				<div class="y-operate">
					<i @click="showBtnsBase2" v-show="!btnsBase2" class="iconfont icon-bianji y-text-bianji"></i>
					<yFormBtns v-show="btnsBase2" 
						:status="status" 
						@save="saveBase"
						@cancle="cancleBase2"
						@handle="handleBase"></yFormBtns>
				</div>
				基本信息
			</div>
			<div class="y-content">
				<el-row v-show="editBase2" :gutter="5">
					<el-col :xs="24" :sm="12" :md="8" :lg="8" v-for="(val,key) in formDataConfig2">
						<yInput  v-model="formData[key]" 
							:class="alterFields.indexOf(val.id) > -1 ? 'y-alter-item' : ''" 
							:name="key"
							:formData="formData"
							:inputData="formDataConfig2[key]" ></yInput>
					</el-col>
				</el-row>
				<el-row v-show="!editBase2" :gutter="5">
					<el-col :xs="24" :sm="12" :md="8" :lg="8" v-for="(val,key) in formDataConfig2">
						<el-form-item :class="alterFields.indexOf(val.id) > -1 ? 'y-alter-item' : ''" :label="val.text">
							<el-input v-model="formDataConfig2[key].typedata[0][formData[key]]" v-if="formDataConfig2[key].type == 'radio'" :disabled="true"> </el-input>
							<el-input v-model="formData[key]" :title="formData[key]" v-else :disabled="true"> </el-input> 
						</el-form-item>
					</el-col>
				</el-row>
			</div>
		</div>
	</el-form>
</template>
<script>
	import Qs from 'qs';
	import { deepCopyObj, deepCopyArry } from '@/assets/js/v-extend.js';
	import { ajaxData, getUpdateParam } from '@/assets/js/ajaxdata.js';
	import photoSrc from '../../../../assets/img/user.png';
	import yInput from '@/components/public/yinput';
	import yFormBtns from '@/components/public/yformbtns';
	var UserInfo;
	export default {
		props: ['editabled'],
		data() {
			return {
				aa: {},
				rules: {},
				formDataInit: {}, //初始状态的表单数据 
				formData: {}, //当前表单数据
				formDataConfig1: {},
				formDataConfig2: {},
				editBase1: false, //默认不显示基本信息 头像区域的 编辑框
				btnsBase1: false, //默认隐藏操作按钮
				editBase2: false, //默认不显示基本信息 头像下方区域的 编辑框
				btnsBase2: false, //默认隐藏操作按钮
				status: -1,
				infoSetCode: '', //信息集编码(保存操作的时候需要传给后台)
				alterFields: '', //被修改的字段名称(后台传入)
				iconForm: 'officephone,mobile,email',
				iconCls: {
					'officephone': 'icon-dianhua1',
					'mobile': 'icon-dianhua',
					'email': 'icon-youjian'
				}
			}
		}, 
		components: {
			yInput, //表单元素
			yFormBtns //表单操作按钮区[根据表单的不同状态，动态显示不同的操作按钮 ]
		},
		computed: {
			baseFormInit(){
				return this.$store.state.BaseInfo.baseFormInit;//获取初始信息静态数据
			}
		},
		created() { 
			UserInfo = JSON.parse( window.localStorage.getItem("usermsg") );//获取人员信息
			
			this.formDataInit = deepCopyObj( this.baseFormInit );//数据深拷贝
			this.formData = deepCopyObj( this.baseFormInit ); 
			this.loadInfoData();
			this.transferData(this.$store.state.BaseInfo.baseInfo1, this.formDataConfig1);
			this.transferData(this.$store.state.BaseInfo.baseInfo2, this.formDataConfig2);  
		},
		methods: {
			//批量数据处理，转换成能自动生成表单的数据格式
			transferData(data, configdata) {
				var _formconfig = data;

				for(let i in _formconfig) {
					var _d = _formconfig[i];
					var _id = _d.id;
					configdata[_id] = _d;

					if(_d.valid) {
						this.rules[_id] = _d.valid;
					};
				};
			},
			//动态加载基本信息数据
			loadInfoData() {
				ajaxData(this.$store.state.Interface.information, {
					"pk_psndoc":UserInfo.pk_psndoc,
			    	"cuserid":UserInfo.cuserid,
			    	"pk_group":UserInfo.pk_group,
			    	"param.pk_org": UserInfo.pk_org,
					"infoSetCode": "bd_psndoc",
					"transType": 'psnInfoQuery' 
				}, (res) => {  
					var _dataobj = res.list[0]; 
					this.status = res.status;   
					this.alterFields = (res.alterFields ? res.alterFields : ''); 
					this.infoSetCode = res.infoSetCode;
					 
					_dataobj.photo = (_dataobj.photo == "" ? photoSrc : _dataobj.photo); 
					if( _dataobj.sex ){
						_dataobj.sex = _dataobj.sex.toString(); 
					}; 
					for(var i in this.baseFormInit ){ 
						if( !_dataobj[i] ){
							_dataobj[i] = this.baseFormInit[i];
						};
					}; 
					this.formDataInit = deepCopyObj(_dataobj);
					this.formData = deepCopyObj(_dataobj);  
				});
			},
			//点击保存按钮
			saveBase(){ 
				var _formdatastr = JSON.stringify( this.formData );  
				if( _formdatastr == JSON.stringify( this.formDataInit ) ){ //没有修改
					this.btnsBase1 = false;
					this.editBase1 = false;
					this.btnsBase2 = false;
					this.editBase2 = false;
				}else{
					this.$refs['myForm'].validate((valid) => {   
						if (valid) {   
							var _param = JSON.parse( JSON.stringify( getUpdateParam( this.formDataInit, this.formData ) ) );
							if( _param.addr_show ){
								delete _param.addr_show;
							}; 
							ajaxData(this.$store.state.Interface.information, {
								"transType": "psnInfoSave",  
								"infoSetCode": this.infoSetCode,
								"jsonStr": JSON.stringify( _param ) 
							}, (res) => {   
								this.btnsBase1 = false;
								this.editBase1 = false;
								this.btnsBase2 = false;
								this.editBase2 = false;
								this.loadInfoData();
							});
						};
			       }); 
				}; 
			},
			//点击提交、还原、收回按钮
			handleBase( data ){  
				ajaxData(this.$store.state.Interface.information, {
					"transType": 'psnInfoHandle', 
					"infoSetCode": this.infoSetCode,
					"way": data[0]
				}, (res) => {   
					this.btnsBase1 = false;
					this.editBase1 = false;
					this.btnsBase2 = false;
					this.editBase2 = false;
					this.loadInfoData();
				});
			},
			//点击头像区域 右上角图标显示操作按钮区
			showBtnsBase1(){
				this.btnsBase1 = true; 
				this.showEditBase1();
			},
			//点击头像区域 取消按钮
			cancleBase1() {
				this.formData = deepCopyObj(this.formDataInit ); 
				this.btnsBase1 = false;
				this.editBase1 = false;
			},
			//点击头像下方区域 右上角图标显示操作按钮区
			showBtnsBase2(){
				this.btnsBase2 = true;
				this.showEditBase2();
			},
			//点击头像下方区域 取消按钮
			cancleBase2() {
				this.formData = deepCopyObj(this.formDataInit ); 
				this.btnsBase2 = false;
				this.editBase2 = false;
			},
			//展示基本信息头像编辑区域
			showEditBase1( ){ 
				if( this.status == -1 || this.status == 0 ){
				 	this.editBase1 = true;
				};
			},
			//展示基本信息头像下方编辑区域
			showEditBase2( ){ 
				if( this.status == -1 || this.status == 0 ){
					this.editBase2 = true;
				}; 
			}
		}
	}
</script>