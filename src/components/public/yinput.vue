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
	
	<!--省级联 begin -->
	<el-form-item class="y-input" v-else-if="inputData.type == inputType[4]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">   
		<yRegion 
			:visible="showCasc" 
			:source="cascFormData"   
			:config="inputData" @close="showCasc = false"></yRegion> 
		<el-input :disabled="inputData.disabled" :title="currentValue" :readonly="true" v-model="currentValue" icon="caret-bottom" @click="selectCascader"></el-input>  
	</el-form-item> 
	<!-- 职称级联菜单 begin -->
	<el-form-item class="y-input" v-else-if="inputData.type == inputType[5]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">   
		 <el-cascader
		    :options="optionsdata"
		    v-model="techValue"
		    :props="props1" 
		    :show-all-levels='false'
		    filterable
		    change-on-select
		    @change="techCascader()">
		</el-cascader>
	</el-form-item> 
	
	<!-- textarea begin -->
	<el-form-item class="y-input" v-else-if="inputData.type == inputType[6]" :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">   
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
			inputType: ['date', 'refer', 'radio', 'checkbox', 'region','tech','textarea'],
			referCusStr: 'idtype,bloodtype', //自定义的参照字段集合
			cascFormData: {}, //级联菜单中使用的当前表单数据
			cascPrev: '', //级联菜单的前置条件(例：国籍)
			optionsdata: [],
			props1:{ "value":'pk_defdoc', "label": 'name' }, //职称级联菜单的显示映射关系
			techValue:[]
		}
	},
	components: { 
		yRegion //省市区弹窗
	}, 
	props:['name', 'value', 'inputData', 'formData','subtype'],// 设置value为props属性-必须
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
		if( this.inputData.type == this.inputType[1]||this.inputData.type == this.inputType[5] ){  //参照类型数据格式 
			this.loadData();
		};
    },
    watch:{
    	
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
					"transType": 'country' 
				},( res ) => {   
					this.optionsdata =  res.list;  
					var _name = this.name; 
					this.currentValue = this.formData[_name]; 
		    	}); 
    		}else if(_code == 'HR019_0xx'){//获取职称
    			ajaxData( this.$store.state.Interface.sm, { 
					"transType": 'defdoc', 
					"defdoclistCode": this.inputData.typedata[0].code
				},( res ) => { 
					this.optionsdata =  this.toTreeData(res.list); 
					var _name = this.name; 
					this.currentValue = this.formData[_name]; 
					console.log(this.toTreeData( res.list))
		    	}); 
		    	
    		}else{ //从后台取数据的参照类型
    			ajaxData( this.$store.state.Interface.sm, {
					"transType": 'defdoc', 
					"defdoclistCode": this.inputData.typedata[0].code
				},( res ) => {   
					this.optionsdata =  res.list;    
					var _name = this.name; 
					this.currentValue = this.formData[_name]; 
		    	}); 
    		}; 
    	}, 
    	systime(){
    		var date = new Date();
			var year = date.getFullYear();
			var month = (date.getMonth() + 1);
			month = month > 9 ? month : "0" + month;
			var day = date.getDate();
			day = day > 9 ? day : "0" + day;
			var hours = date.getHours();
			hours = hours > 9 ? hours : "0" + hours;
			var minutes = date.getMinutes();
			minutes = minutes > 9 ? minutes : "0" + minutes;
			var seconds = date.getSeconds();
			seconds = seconds > 9 ? seconds : "0" + seconds;
			return year + '-' + month + '-' + day;
    	},
    	systimetran(date){
    		var date = new Date(date);
			var year = date.getFullYear();
			var month = (date.getMonth() + 1);
			month = month > 9 ? month : "0" + month;
			var day = date.getDate();
			day = day > 9 ? day : "0" + day;
			var hours = date.getHours();
			hours = hours > 9 ? hours : "0" + hours;
			var minutes = date.getMinutes();
			minutes = minutes > 9 ? minutes : "0" + minutes;
			var seconds = date.getSeconds();
			seconds = seconds > 9 ? seconds : "0" + seconds;
			return year + '-' + month + '-' + day;
    	},
    	sysdays(sDate1,  sDate2){
	        var  aDate,  oDate1,  oDate2,  iDays;
	        aDate  =  sDate1.split("-"); 
	        oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);
	        aDate  =  sDate2.split("-");
	        oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]); 
	        iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24); 
	        return  iDays;
    	},
    	dateChange( val ){
    		this.currentValue = val;   
    		if(this.subtype!=''){
    			if(this.subtype.infoSetCode=="hi_psndoc_partylog"){
					if(this.formData.partyduedate==''){
						this.formData.glbdef4='0';
					}else {
						if(this.systime()<this.systimetran(this.currentValue)){
//							this.$message.error('转正日期不能大于系统日期');
							this.formData.partyduedate='';
							this.formData.glbdef4='0';
						}else{
							var days=this.sysdays(this.systime(),this.systimetran(this.currentValue));
							var _glbdef4=(days/365).toFixed(2);
							this.formData.glbdef4=_glbdef4;
						}
					}
	    		}
    		}
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
    	techCascader(val){
    		var num=this.techValue.length-1;
    		this.formData.pk_techposttitle=this.techValue[num];
    		this.$emit('inputChange', this.name ); 
    	},
    	selectCascader(){
    		this.cascFormData = this.formData;  
    		this.showCasc = true;
    	},
    	//json格式转成树结构
    	toTreeData( data, config ){ 
	    	var _id = "pk_defdoc";
	    	var _pid = "pid"; 
	    	var _children = "children";
	    	if( config ){
	    		_id = config.id; 
	    	};
	        var map = {}; //缓存当前数据的id object对应关系
	        
	        data.forEach(function (item) {
	        	if( !item[_pid] ){
	        		item[_pid] = '~';
	        	};
	        	var _idval = item[_id].toString(); 
	            map[_idval] = item;
	        });  
	        var val = []; 
	        data.forEach(function (item) { 
	        	var _pidval = item[_pid].toString(); 
	            var parent = map[ _pidval ]; 
	            
	            if (parent) { 
	                (parent[_children] || ( parent[_children] = [] )).push(item); 
	            } else { 
	                val.push(item);
	            };
	        });  
	        return val;
	    } 
    }
}
</script>
 