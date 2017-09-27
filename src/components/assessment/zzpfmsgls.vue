<template>
	<div class="y-maincontent">
		
		<div class="y-breadcrumb-box">
			<el-breadcrumb separator="/"> 
			  <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>考核实施</el-breadcrumb-item> 
			  <el-breadcrumb-item>自助评分</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		
		
		<div class="L_inner clearfix">  
			<template>
			  <el-table
			    :data="tableData"
			    stripe
			    @row-click="onRowClick"
			    style="width: 100%">
			    <el-table-column
			      prop="jixiao"
			      label="绩效方案"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="kaoheqijian"
			      label="考核期间"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="kaoheduixiang"
			      label="考核对象组"
			      >
			    </el-table-column>
			    
			    <el-table-column
			      prop="kaohezhuantai"
			      label="考核状态"
			      width="150">
			    </el-table-column>
			    
			  </el-table>
			</template>
			
			
		</div>
	</div>
</template>

<script>   
	import Qs from 'qs';

	export default { 
		
		data(){
			return {
				tableData:[
				{
			      "jixiao": "2017年年度测评",
			      "kaoheqijian": "2017年",
			      "kaoheduixiang": "总经理",
			      "kaohezhuantai":"考核已结束"
			      
			    },{
			      "jixiao": "2017年年度测评",
			      "kaoheqijian": "2017年",
			      "kaoheduixiang": "普通员工",
			      "kaohezhuantai":"考核已结束"
			    },{
			      "jixiao": "2017年年度测评",
			      "kaoheqijian": "2017年",
			      "kaoheduixiang": "总经理",
			      "kaohezhuantai":"考核已结束"
			    },{
			      "jixiao": "2017年年度测评",
			      "kaoheqijian": "2017年",
			      "kaoheduixiang": "副总经理",
			      "kaohezhuantai":"考核已结束"
			    }
				],
				options: [{
		          value: '选项1',
		          label: 'A'
		        }, {
		          value: '选项2',
		          label: 'B'
		        }, {
		          value: '选项3',
		          label: 'C'
		        }, {
		          value: '选项4',
		          label: 'D'
		        }],
		        value: ''
			}
		},
		methods:{  
			savedata(){
				 this.$message({
		          showClose: true,
		          message: '恭喜你，保存成功',
		          type: 'success'
		        });
			},
			submitdata(){
				 this.$message({
		          showClose: true,
		          message: '恭喜你，提交成功',
		          type: 'success'
		        });
			},
			onRowClick(res){
				
			},
			morelist(){
				
			}
		    
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
		/*line-height: 60px;*/
		font: 16px/60px "微软雅黑";
	}
	.L_inner {
		margin-top: 20px;
		background: #fff;
		padding: 20px 20px 20px 20px;
	}
	
</style>