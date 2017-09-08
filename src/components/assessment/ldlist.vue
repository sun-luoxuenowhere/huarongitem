<template>
	<div class="y-maincontent">
		
		<div class="y-breadcrumb-box">
			<el-breadcrumb separator="/"> 
			  <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>考核实施</el-breadcrumb-item> 
			  <el-breadcrumb-item>领导评级</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		
		<div class="L_kaohe clearfix">
			<div style="float: left;">
				<span style="padding-left: 20px;">测评方案：2017年7月一般员工年度测评</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>信息科技部</span>
			</div>
			<div style="width: 200px; float: right;margin-right: 30px;"><el-input
			  placeholder="查询人员"
			  icon="search">
			</el-input></div>
				
		</div>
		
		<div class="L_inner clearfix">  
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
			      label="员工号"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="kaohebiao"
			      label="被考核人"
			      >
			    </el-table-column>
			    
			    <el-table-column
			      prop="fen"
			      label="总分"
			      width="150">
			    </el-table-column>
			    <el-table-column
			      prop="pingfen"
			      label="领导评级"
			      width="150">
					  <template scope="scope">
				        <el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
			      </template>
			    </el-table-column>
			  </el-table>
			</template>
			
			<div style="float: right;margin-top: 10px;">
				<el-button @click="savedata()" type="primary">保存</el-button>
				<el-button @click="submitdata()" type="primary">提交</el-button>
			</div>
		</div>
	</div>
</template>

<script>   
	import Qs from 'qs';

	export default { 
		
		data(){
			return {
				tableData:[],
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
		/*line-height: 60px;*/
		font: 16px/60px "微软雅黑";
	}
	.L_inner {
		margin-top: 20px;
		background: #fff;
		padding: 20px 20px 20px 20px;
	}
	
</style>