<!--
	作者：yugl
	时间：2017-09-06 
	支持：级联
-->
<template>  
	<div class="y-dialog"> 
		<el-dialog class="y-info-dialog" title="选择城市地区" :show-close="false" :visible="visible">    
		 	<el-form :model="form" label-width="110px" class="clearfix"> 
		 		<el-form-item class="y-input" label="城市地区">   
					<el-cascader
						v-model="form.pk"
					    :options="optionsdata"
					    :props="config.typedata[0].props"
					    filterable
					    change-on-select  
						></el-cascader>  
				</el-form-item> 
				<el-form-item class="y-input" label="详细地址">   
					<el-input v-model="form.add"></el-input>  
				</el-form-item> 
				<el-form-item class="y-input" label="邮编">   
					<el-input v-model="form.youbian"></el-input>  
				</el-form-item> 
			</el-form> 
			<div class="y-btn-box">
				<el-button class="y-btn-danger" type="danger" @click="ok()">确定</el-button>
	  			<el-button class="y-btn-default" @click="cancle()">取消</el-button> 
  			</div>
		</el-dialog>
	</div>
</template>
<script>  
import { ajaxData } from '@/assets/js/ajaxdata.js';
export default {  
	data(){
		return {  
			loaded: false, //是否已经加载过 
			form: {
				pk: [],
				add: '',
				youbian: ''
			},
			optionsdata: []
		}
	},  
	watch: {
		visible( val ){
			if( val && !this.loaded ){ 
				this.loadCascader();
			}; 
		}
	},
	props: ["visible", "source", "config"],   
	methods: {  
		ok(){
			this.$emit('close');
		},
		//取消操作
		cancle() {  
	        this.$emit('close');
	    },
    	//加载级联类型数据
    	loadCascader(){
    		var _typedata = this.config.typedata[0]; 
    		var _prevkey = _typedata.prevkey;  
    		
    		if( this.source[_prevkey] == "" ){
				alert('请先选择国籍地区');
				return;
			}; 
			
			ajaxData( this.$store.state.Interface.smserverlet, { 
				"transType": _typedata.code, 
				"pk_country": this.source[_prevkey]
			},( res ) => {  
				this.optionsdata = this.toTreeData( res.list );     
				this.loaded = true;
	    	});  
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
	    } 
    }
}
</script>
 