<template>
	<div class="y-maincontent">
		
		<div class="y-breadcrumb-box">
			<el-breadcrumb separator="/"> 
			  <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>考核实施</el-breadcrumb-item> 
			  <el-breadcrumb-item>自助评分</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		
		<div class="L_kaohe clearfix">
			<div style="float: left;">
				<span style="padding-left: 20px;">考核方案：2017年年度测评</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>考核截止日期：2018-01-31</span>
			</div>
			<div style="width: 200px; float: right;margin-right: 30px;">
				<el-button @click="savedata()" type="primary">保存</el-button>
				<el-button @click="submitdata()" type="primary">提交</el-button>
			</div>
				
		</div>
		
		<div class="L_inner clearfix">  
			<template>
			  <el-table
			    :data="tableData"
			    stripe
			    @row-click="onRowClick"
			    
			    style="width: 100%">
			    <el-table-column
			      prop="xuhao"
			      label="序号"
			      width="80"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="yuangong"
			      label="员工号"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="姓名"
			      width="80">
			    </el-table-column>
			    <el-table-column
			      prop="pingxing"
			      label="品行/作风(25%)"
			      width="100"
			      >
			      <template scope="scope">
					    <el-input v-model.number="scope.row.pingxing"  placeholder=""></el-input>
				  </template>
			    </el-table-column>
			    
			    <el-table-column
			      prop="yewu"
			      label="业务能力(25%)"
			      width="100">
			      <template scope="scope">
					    <el-input v-model.number="scope.row.yewu"  placeholder=""></el-input>
				  </template>
			    </el-table-column>
			    <el-table-column
			      prop="zuzhi"
			      label="组织管理能力(25%)"
			      width="100">
			      <template scope="scope">
					    <el-input v-model.number="scope.row.zuzhi"  placeholder=""></el-input>
				  </template>
			    </el-table-column>
			    <el-table-column
			      prop="xietiao"
			      label="协调沟通能力(25%)"
			      width="100">
			      <template scope="scope">
					    <el-input v-model="scope.row.xietiao"  placeholder=""></el-input>
				  </template>
			    </el-table-column>
			    <el-table-column
			      prop="zongfen"
			      label="总分"
			      width="100"
			      :render-header="requiredCol">
			    </el-table-column>
			    <el-table-column
			      prop="zhuangtai"
			      label="状态"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="caozuo"
			      label="操作">
			      <template scope="scope">
			        <el-button
			          @click.native.prevent="deleteRow(scope.row.id)"
			          type="text"
			          size="small" >
			          	收回
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
				tableData:[
				{
			      "xuhao": "1",
			      "name":'王博',
			      "yuangong": "2017",
			      "pingxing": "90",
			      "yewu":"100",
			      "zuzhi":"80",
			      "xietiao":"80",
			      "zongfen":'86',
			      "zhuangtai":"已考核",
			      "caozuo":"收回"
			  },
			  {
			      "xuhao": "1",
			      "name":'露露',
			      "yuangong": "2017",
			      "pingxing": "90",
			      "yewu":"100",
			      "zuzhi":"80",
			      "xietiao":"80",
			      "zongfen":'86',
			      "zhuangtai":"已考核",
			      "caozuo":"收回"
			  },
			  {
			      "xuhao": "1",
			      "name":'刘德华',
			      "yuangong": "2017",
			      "pingxing": "90",
			      "yewu":"100",
			      "zuzhi":"80",
			      "xietiao":"80",
			      "zongfen":'86',
			      "zhuangtai":"已考核",
			      "caozuo":"收回"
			  },
			  {
			      "xuhao": "1",
			      "name":'张学友',
			      "yuangong": "2017",
			      "pingxing": "90",
			      "yewu":"100",
			      "zuzhi":"80",
			      "xietiao":"80",
			      "zongfen":'86',
			      "zhuangtai":"已考核",
			      "caozuo":"收回"
			  },
			  {
			      "xuhao": "1",
			      "name":'郭富城',
			      "yuangong": "2017",
			      "pingxing": "90",
			      "yewu":"100",
			      "zuzhi":"80",
			      "xietiao":"80",
			      "zongfen":'86',
			      "zhuangtai":"已考核",
			      "caozuo":"收回"
			  },
			  {
			      "xuhao": "1",
			      "name":'成龙',
			      "yuangong": "2017",
			      "pingxing": "90",
			      "yewu":"100",
			      "zuzhi":"80",
			      "xietiao":"80",
			      "zongfen":'86',
			      "zhuangtai":"已考核",
			      "caozuo":"收回"
			   }
				]
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
		      onRowClick(arg) {//跳转员工评分页面
		        this.$router.push({
		  			name:'/zzpfyg'
		  		});
		    },
	    	requiredCol(createElement, { column }) {
				return [ column.label, createElement('span', {
						'class': 'ltext-blue'
					},'↓') 
				];
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