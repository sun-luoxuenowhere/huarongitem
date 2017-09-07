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
			<span style="margin-right: 30px;">测评名称：2017年一般员工年度测评</span>
			<el-button type="primary" @click="save()">保存</el-button>
			<el-button type="primary" @click="submit()">提交</el-button>
			<el-button type="primary">集中测评</el-button>
		</div>
		
		<div class="L_inner">
			<div ><span style="font-size: 18px;">被测评人：王辉</span><span style="padding-left: 60px; font-size: 18px;">测评试卷：2017年测评试卷</span></div>
			<div style="float: right;margin-bottom: 10px;">
				<el-button type="primary">上一个人</el-button>
				<el-button type="primary">下一个人</el-button>
			</div>
			<template>
			  <el-table
			    :data="tableData3"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="xuhao"
			      label="序号"
			      width="60">
			    </el-table-column>
			    <el-table-column
			      prop="xiangmu"
			      label="考核项目"
			      >
			    </el-table-column>
			    <el-table-column label="考核标准">
			      
			        <el-table-column
			          prop="pingfen1"
			          label="100-90"
			          width="195">
			        </el-table-column>
			        <el-table-column
			          prop="pingfen2"
			          label="89-80"
			          width="195">
			        </el-table-column>
			        <el-table-column
			          prop="pingfen3"
			          label="79-60"
			          width="195">
			        </el-table-column>
			        <el-table-column
			          prop="pingfen4"
			          label="59-0"
			          width="195">
			        </el-table-column>
			      </el-table-column>
			    <el-table-column
		          prop="zongfen"
		          label="总分"
		          width="100">
		          <template scope="scope">
				     <el-input v-model="scope.row.zongfen"  placeholder=""></el-input>
				  </template>
		        </el-table-column>
			  </el-table>
			</template>
			<div class="clearfix">
				<div class="L_total clearfix" style="float: right;">
					<div>合计</div>
					<div>89</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>   
	export default { 
		
		data(){
			return {
				
				tableData3: [{
		          xuhao: '1',
		          xiangmu: '个人品行',
		          pingfen1: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          pingfen2: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          pingfen3: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          pingfen4: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          zongfen: '89'
		        },{
		          xuhao: '2',
		          xiangmu: '工作业绩',
		          pingfen1: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          pingfen2: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          pingfen3: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          pingfen4: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          zongfen: '89'
		        },{
		          xuhao: '3',
		          xiangmu: '工作能力',
		          pingfen1: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          pingfen2: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          pingfen3: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          pingfen4: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          zongfen: '89'
		        },{
		          xuhao: '4',
		          xiangmu: '工作态度',
		          pingfen1: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          pingfen2: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          pingfen3: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          pingfen4: '具有较高政策水平与学识水平xxxxxxxxxxxxxx',
		          zongfen: '89'
		        }]
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
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
</style>