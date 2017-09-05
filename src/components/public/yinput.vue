<!--
	作者：yugl
	时间：2017-08-22
	描述：通过给表单配置文件指定不同的类型，动态生成对应的组件
	支持：date(日期)、refer(参照)、radio(单选)、checkbox(复选)、默认input
-->
<template>  
	<!-- 日期选择器 begin -->
	<el-form-item class="y-input" v-if="inputData.type == inputType[0]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">   
		<el-date-picker
	      	v-model="currentValue"
	      	placeholder="选择日期"
	      	:disabled="inputData.disabled"
	      	:type="( inputData.typedata ? inputData.typedata[0].type : 'date')"
	      	@change="dateChange">
    	</el-date-picker>
	</el-form-item> 
	
	<!-- 下拉菜单 begin -->
	<el-form-item class="y-input" v-else-if="inputData.type == inputType[1]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">   
		<el-select v-model="currentValue" :disabled="inputData.disabled" filterable placeholder="请选择">
		    <el-option
			      v-for="item in optionsdata"
			      :key="item.code"
			      :label="item.name"
			      :value="item.pk_defdoc ? item.pk_defdoc : item.pk_country">
		    </el-option>
		</el-select> 
	</el-form-item> 
	
	<!-- 单选框 begin -->
	<el-form-item class="y-input" v-else-if="inputData.type == inputType[2]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">   
		<el-radio :disabled="inputData.disabled" v-for="(key,val) in inputData.typedata[0]"  
			v-model="currentValue" 
			:label="val">{{key}}</el-radio> 
	</el-form-item> 
	
	<!-- 复选框 begin -->
	<el-form-item class="y-input" v-else-if="inputData.type == inputType[3]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">  
		<el-checkbox-group v-model="currentValue">
			<el-checkbox :disabled="inputData.disabled" v-for="(key,val) in inputData.typedata[0]" :label="val">{{key}}</el-checkbox> 
		</el-checkbox-group>
	</el-form-item> 
	
	<!-- 级联菜单 begin -->
	<el-form-item class="y-input" v-else-if="inputData.type == inputType[4]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">  
		开发中
	</el-form-item> 
	
	<!-- 文本框 begin -->
	<el-form-item class="y-input" v-else :label="inputData.text" :prop="inputData.valid ? inputData.id : ''"> 
		<el-input :disabled="inputData.disabled" v-model="currentValue"></el-input>  
	</el-form-item> 
</template>
<script>  
import { ajaxData } from '@/assets/js/ajaxdata.js';
export default {  
	data(){
		return {
			inputType: ['date', 'refer', 'radio', 'checkbox', 'cascader'],
			referCusStr: 'idtype,bloodtype', //自定义的参照字段集合
			optionsdata: []
		}
	},
	props:['value', 'inputData', 'initVal'],// 设置value为props属性-必须
	computed:{
		currentValue: {// 动态计算currentValue的值
			get:function() {
  				return this.value;
  			},
  			set:function( val ) { 
  				this.$emit('input', val);
  			}
		}
	},
	mounted() { 
		//参照类型数据格式
		if( this.inputData.type == this.inputType[1] ){
			this.loadData();  
		};
    },
	methods: { 
    	loadData(){   
    		var _code = this.inputData.typedata[0].code; 
    		if( this.referCusStr.indexOf(_code) > -1 ){ //自定义的参照类型 
    			this.optionsdata = this.$store.state.ReferInit[ _code ];    
				this.currentValue = this.initVal; 
    		}else if( _code == 'country' ){
    			ajaxData( this.$store.state.Interface.smserverlet, { 
					"transType": 'country' 
				},( res ) => {   
					this.optionsdata =  res.list;  
					this.currentValue = this.initVal;   
		    	}); 
    		}else{
    			ajaxData( this.$store.state.Interface.smserverlet, { 
					"transType": 'defdoc', 
					"defdoclistCode": this.inputData.typedata[0].code
				},( res ) => {   
					this.optionsdata =  res.list;    
					this.currentValue = this.initVal; 
		    	}); 
    		};
    		
    	},
    	dateChange( val ){
    		this.currentValue = val;   
    	}
    }
}
</script>
 