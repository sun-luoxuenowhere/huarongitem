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
		<el-select v-model="currentValue" :disabled="inputData.disabled" @change="inputChange" filterable placeholder="请选择">
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
		<el-cascader v-model="currentValue" 
		    :options="optionsdata"
		    :props="inputData.typedata[0].props"
		    filterable
		    change-on-select 
		    @change="inputChange"
		></el-cascader>
	</el-form-item> 
	
	<!-- 文本框 begin -->
	<el-form-item class="y-input" v-else :label="inputData.text" :prop="inputData.valid ? inputData.id : ''">  
		<el-input :disabled="inputData.disabled" v-model="currentValue" @change="inputChange"></el-input>  
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
	props:['name', 'value', 'inputData', 'formData'],// 设置value为props属性-必须
	computed:{ 
		currentValue: {// 动态计算currentValue的值
			get:function() {
				var _val = this.value;
				if( this.inputData.type == this.inputType[3] || this.inputData.type == this.inputType[4] ){ 
					_val = ( _val == "" ? [] : _val.split(',') );  
					console.info('get', _val );
				};
  				return _val;
  			},
  			set:function( val ) {  
  				if( this.inputData.type == this.inputType[3] || this.inputData.type == this.inputType[4] ){
					val = val.join(','); 
					console.info('set', val );
				}; 
  				this.$emit('input', val);
  			}
		}
	},
	mounted() {  
		
		if( this.inputData.type == this.inputType[1] ){  //参照类型数据格式 
			this.loadData();   
		}else if( this.inputData.type == this.inputType[4] ){  //级联类型数据格式
			this.loadCascader(); 
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
    			ajaxData( this.$store.state.Interface.smserverlet, { 
					"transType": 'country' 
				},( res ) => {   
					this.optionsdata =  res.list;  
					var _name = this.name; 
					this.currentValue = this.formData[_name]; 
		    	}); 
    		}else{
    			ajaxData( this.$store.state.Interface.smserverlet, { 
					"transType": 'defdoc', 
					"defdoclistCode": this.inputData.typedata[0].code
				},( res ) => {   
					this.optionsdata =  res.list;    
					var _name = this.name; 
					this.currentValue = this.formData[_name]; 
		    	}); 
    		}; 
    	},
    	//加载级联类型数据
    	loadCascader(){
    		var _typedata = this.inputData.typedata[0]; 
    		var _prevkey = _typedata.prevkey;
    		setTimeout(( data ) => {  
    			
    			if( this.formData[_prevkey] == "" ){
    				alert('请先选择国籍地区');
    				return;
    			};
				ajaxData( this.$store.state.Interface.smserverlet, { 
					"transType": _typedata.code, 
					"pk_country": this.formData[_prevkey]
				},( res ) => {  
					this.optionsdata = this.toTreeData( res.list );    
		    	}); 
	    	}, 2000); 
    	},
    	//json格式转成树结构
    	toTreeData( data, config ){ 
	    	var _id = "pk_region";
	    	var _pid = "pk_father"; 
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
	    },
    	dateChange( val ){
    		this.currentValue = val;    
    		this.$emit('inputChange', this.name ); 
    	},
    	inputChange( val ){   
    		this.$emit('inputChange', this.name ); 
    	}
    }
}
</script>
 