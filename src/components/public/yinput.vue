<!--
	作者：yugl
	时间：2017-08-22
	描述：通过给表单配置文件指定不同的类型，动态生成对应的组件
	支持：date(日期)、refer(参照-一级的下拉菜单)、region(参照-城市地区选择弹窗)、radio(单选)、checkbox(复选)、默认input
-->
<template>   
	<!-- 日期选择器 begin -->
	<el-form-item class="y-input" v-if="inputData.type == inputType[0]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">   
		<el-date-picker
	      	v-model="currentValue"
	      	placeholder="选择日期"
	      	:editable="false"
	      	:disabled="inputData.disabled"
	      	:type="( inputData.typedata ? inputData.typedata[0].type : 'date')"
	      	@change="dateChange">
    	</el-date-picker>
	</el-form-item> 
	
	<!-- 下拉菜单 begin -->
	<el-form-item class="y-input" v-else-if="inputData.type == inputType[1]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">   
		<el-select :title="currentValue" v-model="currentValue" :disabled="inputData.disabled" @change="selectChange" filterable placeholder="请选择">
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
		<el-radio-group v-model="currentValue" @change="inputChange">
			<el-radio v-for="(key,val) in inputData.typedata[0]"   
				:disabled="inputData.disabled"
				:label="val">{{key}}</el-radio> 
		</el-radio-group>
	</el-form-item> 
	
	<!-- 复选框 begin -->
	<el-form-item class="y-input" v-else-if="inputData.type == inputType[3]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">  
		<el-checkbox-group v-model="currentValue">
			<el-checkbox v-for="(key,val) in inputData.typedata[0]"
				:disabled="inputData.disabled"
				:label="val"
				@change="inputChange">{{key}}</el-checkbox> 
		</el-checkbox-group>
	</el-form-item> 
	
	<!-- 级联菜单 begin -->
	<el-form-item class="y-input" v-else-if="inputData.type == inputType[4]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">   
		<yRegion 
			:visible="showCasc" 
			:source="cascFormData"   
			:config="inputData" @close="showCasc = false"></yRegion> 
		<el-input :disabled="inputData.disabled" :title="currentValue" :readonly="true" v-model="currentValue" icon="caret-bottom" @click="selectCascader"></el-input>  
	</el-form-item> 
	
	<!-- textarea begin -->
	<el-form-item class="y-input" v-else-if="inputData.type == inputType[5]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">   
		<el-input
		  type="textarea"
		  :autosize="{ minRows: 1, maxRows: 10}"
		  style='resize: none;'
		  wrap="off"
		  placeholder="" :title="currentValue" :disabled="inputData.disabled" v-model="currentValue" @blur="inputChange">
	  	</el-input>
	</el-form-item> 
	
	<!-- 文本框 begin -->
	<el-form-item class="y-input" v-else :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">  
		<el-input :title="currentValue" :disabled="inputData.disabled" v-model="currentValue" @blur="inputChange"></el-input>  
	</el-form-item>  
</template>
<script>  
import { ajaxData } from '@/assets/js/ajaxdata.js';
import Cookies from 'js-cookie';
import yRegion from './yregion'; //省市区弹窗 
var UserInfo;
export default {  
	data(){
		return { 
			showCasc: false,
			inputType: ['date', 'refer', 'radio', 'checkbox', 'region','textarea'],
			referCusStr: 'idtype,bloodtype', //自定义的参照字段集合
			cascFormData: {}, //级联菜单中使用的当前表单数据
			cascPrev: '', //级联菜单的前置条件(例：国籍)
			optionsdata: []
		}
	},
	components: { 
		yRegion //省市区弹窗
	}, 
	props:['name', 'value', 'inputData', 'formData'],// 设置value为props属性-必须
	computed:{ 
		currentValue: {// 动态计算currentValue的值
			get:function() {
				var _val = this.value;
				if( this.inputData.type == this.inputType[3] ){ 
					_val = ( _val == "" ? [] : _val.split(',') );   
				};
  				return _val;
  			},
  			set:function( val ) {  
  				if( this.inputData.type == this.inputType[3] ){
					val = val.join(',');  
				}; 
  				this.$emit('input', val);
  			}
		}
	},
	created(){
//		UserInfo = JSON.parse( Cookies.get('usermsg') );//获取人员信息
	},
	mounted() {   
		if( this.inputData.type == this.inputType[1] ){  //参照类型数据格式 
			this.loadData();   
		};
    },
	methods: { 
		//加载参照类型数据
    	loadData(){   
    		var _code = this.inputData.typedata[0].code;  
    		
    		if( this.referCusStr.indexOf(_code) > -1 ){ //自定义的参照类型 
    			this.optionsdata = this.$store.state.ReferInit[ _code ];   
    			var _name = this.name; 
				this.currentValue = this.formData[_name]; 
    		}else if( _code == 'country' ){ //国籍地区
    			ajaxData( this.$store.state.Interface.sm, { 
//	    			"pk_psndoc":UserInfo.pk_psndoc,
//			    	"cuserid":UserInfo.cuserid,
//			    	"pk_group":UserInfo.pk_group,
//			    	"pk_org": UserInfo.pk_org,
					"transType": 'country' 
				},( res ) => {   
					this.optionsdata =  res.list;  
					var _name = this.name; 
					this.currentValue = this.formData[_name]; 
		    	}); 
    		}else{ //从后台取数据的参照类型
    			ajaxData( this.$store.state.Interface.sm, {
//  				"pk_psndoc":UserInfo.pk_psndoc,
//			    	"cuserid":UserInfo.cuserid,
//			    	"pk_group":UserInfo.pk_group,
//			    	"pk_org": UserInfo.pk_org,
					"transType": 'defdoc', 
					"defdoclistCode": this.inputData.typedata[0].code
				},( res ) => {   
					this.optionsdata =  res.list;    
					var _name = this.name; 
					this.currentValue = this.formData[_name]; 
		    	}); 
    		}; 
    	}, 
    	dateChange( val ){
    		this.currentValue = val;    
    		this.$emit('inputChange', this.name ); 
    	},
    	selectChange( val ){
    		var _typedata = this.inputData.typedata[0]; 
    		var _cascPrevKey = _typedata.cascPrevKey;   
    		if( _cascPrevKey && val.length == this.formData[_cascPrevKey].length ){  
    			this.formData[_cascPrevKey] = val;
    		};
    		this.$emit('inputChange', this.name ); 
    	},
    	inputChange( val ){   
    		this.$emit('inputChange', this.name ); 
    	}, 
    	selectCascader(){
    		this.cascFormData = this.formData;  
    		this.showCasc = true;
    	}
    }
}
</script>
 