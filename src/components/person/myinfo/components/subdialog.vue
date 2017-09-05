<template>
	<div class="y-dialog"> 
		<el-dialog :title="title" :show-close="showClose" :visible="visible" class="y-info-dialog">    
		 	<el-form :model="formData" :rules="rules" ref="myForm" label-width="110px" class="clearfix"> 
				<yInput v-for="(val,key) in formDataConfig"  
					v-model="formData[key]" 
					:name="key"
					:class="formDataConfig[key].type == 'date' ? 'y-date-formitem' : ''"
					:inputData="formDataConfig[key]" 
					:initVal="formData[key]"
					@selectChange="selectChange"></yInput>  
			</el-form> 
			<div class="y-btn-box">
				<el-button class="y-btn-danger" type="danger" @click="submitForm()">保存</el-button>
	  			<el-button class="y-btn-default" @click="cancle()">取消</el-button> 
  			</div>
		</el-dialog>
	</div>
</template>
<script>  
import { deepCopyObj } from '@/assets/js/v-extend.js';
import yInput from '@/components/public/yinput';
export default {
	props: ["visible", "title", "formConfig", "formData"],  
	data() {
		return {   
			showClose: false, //隐藏右上角关闭按钮     
			changedReferKey: [], //被修改的参照字段
			rules: { },
			formDataConfig: { } 
		}
	},  
	components: {
		yInput, //表单元素  
	},  
	mounted(){
		this.transferData(); 
	},
	methods: { 
		selectChange( data ){
			this.changedReferKey.push( data ); 
		},
		//确定操作
		submitForm(){   
		 	this.$refs['myForm'].validate((valid) => {    
				if (valid) {   
					this.$emit('submit', this.postFormData() );  
					this.resetForm();
				} else {
					return false;
				};
	       }); 
		},
		//被提交到后台的表单数据
		postFormData(){
			var _current = deepCopyObj( this.formData );
			var _config = this.formConfig;
			for( var i = 0, l = _config.length; i < l; i++){
				var _d = _config[i];
				var _id = _d.id; 
				 
				if( _d.type == "refer" && this.changedReferKey.join(',').indexOf(_id) < 0 ){ 
					delete _current[_id]; 
				};
			}; 
			return _current;
		},
		//取消操作
		cancle() { 
	        //this.resetForm();
	        this.$emit('close');
	    },
	    //重置表单
	    resetForm(){
	     	for(var i in this.formData ){
	     		this.formData[i] = '';
	     	};
	     	this.$refs['myForm'].resetFields();
	    }, 
	    //表单数据批量处理
		transferData(){ 
			var _formconfig = this.formConfig;
			
			for( let i in _formconfig ){
				var _d = _formconfig[i];
				var _id = _d.id; 
				this.formDataConfig[_id] = _d;   
				
				if( _d.valid ){
					this.rules[ _id ] = _d.valid;
				};
			};   
		} 
	}
}
</script> 