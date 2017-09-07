<template>
	<div class="y-maincontent">
		
		<div class="y-breadcrumb-box">
			<el-breadcrumb separator="/"> 
			  <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>考核实施</el-breadcrumb-item> 
			  <el-breadcrumb-item>汇报关系上报</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		
		<div class="L_kaohe">
			<el-button type="primary">新增</el-button>
			<el-button type="primary">删除</el-button>
			<el-button type="primary">升级</el-button>
			<el-button type="primary">降级</el-button>
			<el-button type="primary">上报</el-button>
		</div>
		
		<div class="L_inner">  
			<el-tree
			  class="filter-tree"
			  :data="data2"
			  :props="defaultProps"
			  default-expand-all
			  ref="tree2">
			</el-tree>
		</div>
	</div>
</template>

<script>   
	import Qs from 'qs';

	export default { 
		
		data(){
			return {
				data2: [{
		          id: 1,
		          label: '00002张三',
		          children: [{
		            id: 4,
		            label: '00003李四',
		            children: []
		          },{
		            id: 4,
		            label: '00004王五',
		            children: []
		          },{
		            id: 4,
		            label: '00006老三',
		            children: [{
		              id: 9,
		              label: '00007王总'
		            }, {
		              id: 10,
		              label: '00008小三',
		              children: [
		              	{
			              id: 9,
			              label: '00009张福'
			            }
		              ]
		            }]
		          }]
		        }],
		        defaultProps: {
		          children: 'children',
		          label: 'label'
		        }
			}
		},
		methods:{  
			
		    
		},
		created(){ 
			
			
		}
	}
</script> 
<style scoped="scoped">
	.L_kaohe {
		width: 100%;
		height: 60px;
		background: #fff;
		/*padding-left: 50px;*/
		text-indent: 50px;
		line-height: 60px;
		font: 16px/60px "微软雅黑";
	}
	.L_inner {
		margin-top: 20px;
		background: #fff;
		padding: 20px 20px 20px 20px;
	}
</style>