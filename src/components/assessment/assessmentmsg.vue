<template>
	<div class="y-maincontent L_noborder">
		
		<div class="y-breadcrumb-box">
			<el-breadcrumb separator="/"> 
			  <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>考核实施</el-breadcrumb-item> 
			  <el-breadcrumb-item>自助评分列表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		
		<div class="L_kaohe">
			<span style="margin-right: 30px;">测评方案：2017年7月的绩效考核</span>
			<el-button type="primary" @click="save()">保存</el-button>
			<el-button type="primary" @click="submit()">提交</el-button>
		</div>
		
		<div class="L_inner">
			<div >被测评人：王辉</div>
			<div style="float: right;margin-bottom: 10px;">
				<el-button type="primary">上一个人</el-button>
				<el-button type="primary">下一个人</el-button>
			</div>
			<template>
				
			  <el-table
			  	border
			    :data="tableData"
			    style="width: 100%">
			    <el-table-column
			      prop="date"
			      label="序号"
			      width="80">
			    </el-table-column>
			    <el-table-column
			      prop="project"
			      label="考核项"
			      width="150">
			    </el-table-column>
			    <el-table-column
			      prop="doing"
			      label="实际完成情况"
			      >
			      <template scope="scope">
				      <el-input
						  type="textarea"
						  :autosize="{ minRows: 1, maxRows: 10}"
						  placeholder="请输入内容" v-model="scope.row.doing">
					  </el-input>
				  </template>
			    </el-table-column>
			    <el-table-column
			      prop="zhanbi"
			      label="占比"
			      width="80">
			    </el-table-column>
			    <el-table-column
			      prop="zijifen"
			      label="自评得分"
			      width="80">
			      <template scope="scope">
					    <el-input v-model.number="scope.row.zijifen" @blur="validform(scope.row.zijifen)" placeholder=""></el-input>
				  </template>
			    </el-table-column>
			    <el-table-column
			      prop="jilifen"
			      label="项目经理评分"
			      width="80">
			      <template scope="scope">
				     <el-input v-model="scope.row.jilifen" @blur="validform(scope.row.jilifen)" placeholder=""></el-input>
				  </template>
			    </el-table-column>
			    <el-table-column
			      prop="zuzhangfen"
			      label="组长审核得分"
			      width="80">
			      <template scope="scope">
				     <el-input v-model="scope.row.zuzhangfen" @blur="validform(scope.row.zuzhangfen)"  placeholder=""></el-input>
				  </template>
			    </el-table-column>
			    
			  </el-table>
			</template>
			<div class="clearfix">
				<div class="L_total clearfix" style="float: right;">
					<div>合计</div>
					<div>0</div>
					<div>0</div>
					<div>0</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>   
	export default { 
		
		data(){
			return {
				
				tableData: [{
		          date: '1',
		          project: '总体承担项目情况',
		          doing:'',
		          zhanbi:'0.2',
		          zijifen:'',
		          jilifen:'',
		          zuzhangfen:''
		        },
				{
		          date: '2',
		          project: '总体承担项目情况',
		          doing:'',
		          zhanbi:'0.2',
		          zijifen:'',
		          jilifen:'',
		          zuzhangfen:''
		        }],
		        isTrue:''
			}
		},
		methods:{  
		    save(){
		    	var tableData=this.tableData;
		    	console.log(tableData)
				if(this.isTrue==true){//判断评分规则输入的是否合法进行保存
					this.$http.post("url", {//传相应的参数将数据发送给后端
					      data: tableData
			      	}).then(( response ) => { 
			      		var _data=response.data;
						if(_data.flag=='0'){
							
						}
						
					}).catch((err) => { 
						this.$message.error(err);
					}); 
				}else if(this.isTrue==false){
					this.$message({
			          message: '评分不能为空，不能大于100分，只能输入数字',
			          type: 'warning'
			        });
				}
		    },
		    submit(){
		    	var tableData=this.tableData;
		    	console.log(tableData)
				if(this.isTrue==true){//判断评分规则输入的是否合法进行保存
					this.$http.post("url", {//传相应的参数将数据发送给后端
					      data: tableData
			      	}).then(( response ) => { 
			      		var _data=response.data;
						if(_data.flag=='0'){
							
						}
						
					}).catch((err) => { 
						this.$message.error(err);
					}); 
				}else if(this.isTrue==false){
					this.$message({
			          message: '评分不能为空，不能大于100分，只能输入数字',
			          type: 'warning'
			        });
				}
		    },
		    validform(value){//校验输入的评分规则
				var re = /^[0-9]+.?[0-9]*$/;
				if(!value){
					this.$message({
			          message: '评分不能为空',
			          type: 'warning'
			        });
			        this.isTrue=false;
				}else if(!re.test(value)){
		    		this.$message({
			          message: '评分请输入数字',
			          type: 'warning'
			        });
			        this.isTrue=false
		    	}else if(value>100){
		    		this.$message({
			          message: '评分不能大于100',
			          type: 'warning'
			        });
			        this.isTrue=false
		    	}else {
			        this.isTrue=true;
		    	}
		    	
		    }
		},
		created(){ 
			
			console.log(this.$route.query.id)
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
	.L_total div {
		float: left;
		margin-top: -1px;
		margin-left: -1px;
		border: 1px solid #dfe6ec;
		width: 80px;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
</style>