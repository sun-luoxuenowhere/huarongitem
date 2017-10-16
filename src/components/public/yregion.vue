<!--
	作者：yugl
	时间：2017-09-06 
	支持：城市地区参照类型的选择弹窗
-->
<template>  
	<div class="y-dialog"> 
		<el-dialog class="y-info-dialog y-cascader-dialog" title="选择城市地区" :before-close="handleClose" :show-close="true" :visible="visible">   
		 	<el-form :model="regionForm" :rules="rules" ref="regionForm" label-width="110px" class="clearfix"> 
		 		<el-form-item class="y-input" prop="pks" label="城市地区">   
					<el-cascader
						v-model="regionForm.pks"
					    :options="optionsdata"
					    :props="props" 
					    filterable
					    change-on-select   
						></el-cascader>  
				</el-form-item> 
				<el-form-item class="y-input" label="详细地址">   
					<el-input v-model="regionForm.detailinfo"></el-input>  
				</el-form-item> 
				<el-form-item class="y-input" label="邮编">   
					<el-input v-model="regionForm.postcode"></el-input>  
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
import axios from 'axios';  
import Qs from 'qs';
import Cookies from 'js-cookie';
import { ajaxData } from '@/assets/js/ajaxdata.js';
var UserInfo;
export default {  
	data(){
		return {   
//			userInfo: JSON.parse( Cookies.get('usermsg') ),
			dataCache: {}, //缓存已经请求过的菜单数据 
			props: { "value": 'pk_region', "label": 'name' }, //级联菜单的显示映射关系
			regionForm: {
				pks: [], //省市区
				detailinfo: '', //详细地址
				postcode: '', //邮编
				country: '' //国家
			},
			rules: { //校验省市区必输
				pks: [{ type: 'array', required: true, message: '请选择城市', trigger: 'change' }]
			},
			optionsdata: [] //当前级联菜单的数据
		}
	},  
	watch: {
		visible( val ){
			var _pk = this.getPK_country();  
			if( !this.dataCache[_pk] ){
				this.loadCascader(); 
			};   
			
		}
	},
	props: ["visible", "source", "config" ],
	created(){
//		UserInfo = JSON.parse( Cookies.get('usermsg') );//获取人员信息
	},
	methods: {  
		ok(){
			this.$refs['regionForm'].validate((valid) => {     
				if (valid) {   
						this.regionForm.country = this.getPK_country();
						this.saveAddr( this.regionForm );  
				} else {
					return false;
				};
	      	});  
		},
		handleClose(){//点击×取消
			this.$emit('close');
		},
		//取消操作
		cancle() {  
	        this.$emit('close');
	  	}, 
	  	getPK_country(){
	  		var _typedata = this.config.typedata[0]; 
    		var _prevkey = _typedata.prevkey;  
    		return this.source[_prevkey];
	  	},
	  	saveAddr( data ){ 
	  		var _sdata = JSON.parse(JSON.stringify(data)); 
	  		_sdata.pks = _sdata.pks.join(','); 
	  		var param = {
	  			"transType": "psnInfoSave", 
				"infoSetCode": "addr",
				"jsonStr":encodeURIComponent(JSON.stringify( _sdata ))
	  		}; 
			this.$http.post( this.$store.state.Interface.hi, Qs.stringify ( param ), { 
	          	headers: {
	                'Content-Type': 'application/x-www-form-urlencoded;charset=gbk'
	          	}
	      	}).then(( response ) => {  
	      		var _data = response.data;
	      		console.log(_data)
	      		if( _data.flag == '0' ){ 
	      			var _id = this.config.id; 
	      			var _valkey = this.config.typedata[0].valkey; 
					this.source[_id] = document.querySelector('.el-cascader .el-cascader__label').innerHTML.replace(/[^\u4e00-\u9fa5]/gi,"");
	      			if( _valkey ){
	      				this.source[_valkey] = _data.addr;
	      			};
	      			this.$emit('close');
	      		}else{
	      			this.$message.error(_data.des);
	      		}; 
			}).catch((err) => { //网络异常
				 
			});  
	  	},
    	//加载级联类型数据
    	loadCascader(){ 
    		var _pk = this.getPK_country();   
			if( _pk == "" ){
				alert('请先选择国籍地区');
				return;
			}; 
			ajaxData( this.$store.state.Interface.sm, { 
				"transType": "region", 
				"pk_country": _pk
			},( res ) => {
				console.log(res)
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
 