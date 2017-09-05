<template>
	<div class="y-dialog"> 
		<el-dialog :title="title" :show-close="showClose" :visible="visible" class="y-info-dialog">    
		 	<el-form :model="currentFormData" :rules="rules" ref="myForm" label-width="110px" class="clearfix"> 
				<yInput v-for="(val,key) in formDataConfig"  
					v-model="currentFormData[key]" 
					:class="formDataConfig[key].type == 'date' ? 'y-date-formitem' : ''"
					:inputData="formDataConfig[key]" :initVal="currentFormData[key]"></yInput>  
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
			rules: { },
			formDataConfig: { } 
		}
	},  
	components: {
		yInput, //表单元素  
	}, 
	computed: {
		currentFormData(){  //缓存初始进来的表单数据
			return deepCopyObj( this.formData );
		}
	},
	mounted(){
		this.transferData(); 
	},
	methods: { 
		//确定操作
		submitForm(){  
		 	this.$refs['myForm'].validate((valid) => { 
		 		var _changeData = this.postFormData(); 
				if (valid ) {
					if( _changeData ){
						this.$emit('submit', _changeData );  
						this.resetForm();
					}else{
						alert('没有任何修改');
						return false;
					};					
				} else {
					return false;
				};
	       }); 
		},
		//被提交到后台的表单数据
		postFormData(){
			var _current = this.currentFormData;  
			var _change = false; //数据是否有变动
			var _data = {};
			
			for( var i in _current ){ 
				if( this.formData[i] != _current[i] ){
					_change = true;
					_data[i] = _current[i];
				};
			}; 
			_data = ( _change ? _data : _change );
			return _data; 
		},
		//取消操作
		cancle() { 
	        this.resetForm();
	        this.$emit('close');
	    },
	    //重置表单
	    resetForm(){
	     	this.currentFormData = deepCopyObj( this.formData );
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