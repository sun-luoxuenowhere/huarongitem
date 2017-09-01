<template>
	<div class="y-maincontent">
		
		<div class="y-breadcrumb-box">
			<el-breadcrumb separator="/"> 
			  <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>考核实施</el-breadcrumb-item> 
			  <el-breadcrumb-item>自助评分列表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		
		<div class="L_kaohe">
			测评方案：2017年7月的绩效考核
		</div>
		
		<div class="L_inner">  
			<template>
			  <el-table
			    :data="tableData"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      prop="date"
			      label="序号"
			      width="80">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="被测评人"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="kaohebiao"
			      label="考核表"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="status"
			      label="状态">
			    </el-table-column>
			    <el-table-column
			      prop="fen"
			      label="得分">
			    </el-table-column>
			    <el-table-column
			      prop="caozuo"
			      label="操作">
			       <template scope="scope">
			        <el-button
			          @click.native.prevent="deleteRow(scope.row.id)"
			          type="text"
			          size="small">
			          	打分
			        </el-button>
			      </template>
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
				tableData:[]
			}
		},
		methods:{  
			
		    deleteRow(arg) {
//		    	console.log(arg)
		        this.$router.push({
		  			name:'/Assessmentmsg',
		  			query: {id: arg}
		  		});
		      }
		},
		created(){ 
			
			this.$http.get("static/asseslist.json", {
				params: {
			      ID: 12345
			    }
	      	}).then(( response ) => { 
//	      		console.log(response)
	      		var _data=response.data;
				if(_data.flag=='0'){
					this.tableData=_data.data;
				}
				
			}).catch((err) => { 
				this.$message.error(err);
			}); 
			
			
			
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