<template>
	<div class="index">
		<my-Header></my-Header> 
		<!--content begin --> 
		<div class="y-main">
		<el-row type="flex" :gutter="20" >
			<el-col :span='4'  class="y-navbar">
				<nav-Bar :navdata="navdata"></nav-Bar>
			</el-col>
			<el-col :span='20' class="y-content">
				<router-view></router-view> 
			</el-col> 
		</el-row> 
		</div>
		<!--content end -->
	</div>
</template>

<script>
import myHeader from './header';
import navBar from './navbar';
//	var store=require('store')
export default {
  	name: 'index',
  	components: {
		myHeader, //顶部 
		navBar //左侧菜单
	}, 
	data () {
	    return { 
	    	navdata:""
	    }
	},
	methods:{ 
		
	},
	created(){ 
		
		//权限判断
		var userid=JSON.parse(window.localStorage.getItem('userid'));
		console.log(userid)
		if(!userid.cuserid){
			this.$router.push({
	  			name:'/Login',
	  		});
		}
		
		//左侧菜单权限设置；
		var data=userid.func;
		var data1={
			"E90101":{"icon":"iconfont icon-renshihangzhengshi","url":"", id: 'E90101', pid: '0',text:'人事信息'},
			"E9010101":{"icon":"","url":"/Information", id:'E9010101', pid: 'E90101',text:'我的信息'},
			"E9010102":{"icon":"","url":"/Employeelist", id: "E9010102", pid: 'E90101',text:'人员信息'}
		};
		var _cachepid = [];
		var _descdata = [];
		for( var i in data){
			var _d = data[i];
			var _pid = _d.pid;
			var _id = _d.id;

			var _data = data1[_id];
			_descdata.push( _data );
			if( _cachepid.join('').indexOf( _pid ) < 0 ){
				var _pdata = data1[_pid];
				_cachepid.push( _pid );
				_descdata.push( _pdata );
			}; 
		};
		
		var navdata=[];
		for(var i = 0; i < _descdata.length; i++){
			if(_descdata[i].pid==0){
				navdata.push({
					"icon":_descdata[i].icon,
					"id":_descdata[i].id,
					"pid":_descdata[i].pid,
					"text":_descdata[i].text,
					"url":_descdata[i].url,
					"children":[]
				});
			}
		}
		for(var i = 0; i < _descdata.length; i++){
			for(var j = 0; j < navdata.length; j++){
				if(_descdata[i].pid==navdata[j].id){
					navdata[j].children.push({
						"icon":_descdata[i].icon,
						"id":_descdata[i].id,
						"pid":_descdata[i].pid,
						"text":_descdata[i].text,
						"url":_descdata[i].url
					});
				}
			}
		}
		this.navdata=navdata;
		
		//
	}
}
</script> 