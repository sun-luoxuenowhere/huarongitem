<!--
	作者：yugl
	时间：2017-09-06 
	支持：城市地区选择弹窗
-->
<template>  
	<div class="y-dialog"> 
		<el-dialog class="y-info-dialog y-cascader-dialog" title="选择城市地区" :show-close="false" :visible="visible">   
		 	<el-form :model="form" label-width="110px" class="clearfix"> 
		 		<el-form-item class="y-input" label="城市地区">   
					<el-cascader
						v-model="form.pks"
					    :options="optionsdata"
					    :props="props" 
					    filterable
					    change-on-select   
						></el-cascader>  
				</el-form-item> 
				<el-form-item class="y-input" label="详细地址">   
					<el-input v-model="form.detailinfo"></el-input>  
				</el-form-item> 
				<el-form-item class="y-input" label="邮编">   
					<el-input v-model="form.postcode"></el-input>  
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
			dataCache: {},
			props: {
	          	"value": 'pk_region',
	          	"label": 'name' 
		    },
			form: {
				pks: [],
				detailinfo: '',
				postcode: ''
			},
			optionsdata: []
		}
	},  
	watch: {
		visible( val ){
			var _pk = this.getPk(); 
			if( !this.dataCache[_pk] ){ 
				this.loadCascader();
			}; 
		}
	},
	props: ["visible", "source", "config", "relinput"],    
	methods: {  
		ok(){
			var _relinput = this.relinput; 
			this.source[_relinput] = document.querySelector('.el-cascader .el-cascader__label').innerHTML.replace(/[^\u4e00-\u9fa5]/gi,"");
			this.$emit('close'); 
		},
		//取消操作
		cancle() {  
	        this.$emit('close');
	  	}, 
	  	getPk(){
	  		var _typedata = this.config.typedata[0]; 
    		var _prevkey = _typedata.prevkey;  
    		return this.source[_prevkey];
	  	},
    	//加载级联类型数据
    	loadCascader(){ 
    		var _pk = this.getPk();
    		
    		if( _pk == "" ){
				alert('请先选择国籍地区');
				return;
			}; 
			
			ajaxData( this.$store.state.Interface.smserverlet, { 
				"transType": "region", 
				"pk_country": _pk
			},( res ) => {  
				this.optionsdata = this.toTreeData( res.list ); 
				this.dataCache[_pk] = this.optionsdata; 
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
 