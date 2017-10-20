<template>
	<div>
		<!-- y-breadcrumb-box begin -->
		<div class="y-breadcrumb-box">
			<el-breadcrumb separator="/"> 
			  <!--<el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>-->
			  <el-breadcrumb-item>我的薪资</el-breadcrumb-item> 
			  <el-breadcrumb-item>薪资查询</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!-- y-breadcrumb-box end -->
		<div class="L-salaryinner">
			<div class="L-salarytittle">
				<span class="block">
				    <el-date-picker
				      v-model="value1"
				      type="month"
				      placeholder="选择查询日期"
				      @change="date1"
				      >
				    </el-date-picker>
				</span>
				
				<span class="L-to">to</span>
				
				<span class="block">
				    <el-date-picker
				      v-model="value2"
				      type="month"
				      placeholder="选择查询日期"
				      @change="date2"
				     >
				    </el-date-picker>
				</span>
				<el-button type="primary" class='y-btn-search' style="margin-left: 20px;" @click="search()">查询</el-button>
			</div>
			<!--查询的内容-->
			<ul class="L-salarylistwrap">
				<li class="L-salarylist"  v-for="item in salarydata">
					<div class="L-salarylisttittle">
						<span class="date">{{item.date}}</span>
						<span @click.stop="seeingbtn()" class="biao"><i v-if="seeing==true" class="iconfont icon-yanjing"></i><i v-else="seeing==false" class="iconfont icon-biyan"></i></span>
					</div>
					
					<div class="L-salarylistinner" v-for="value in item.type">
						<div class="L-tittle">{{value.type1}}</div>
						<div class="L-salarylistborder clearfix">
							<el-row>
								<el-col :span="3" class="inner" v-for="list in value.data">
									<p class="sizatop">{{list.name}}</p>
									<p class="sizacon"><span v-if="seeing==true">{{list.value}}</span><span v-if="seeing==false">----</span></p>
								</el-col>
							</el-row>
						</div>
					</div>
				</li>
				
				
				
				
				
				<!--合计-->
				<li class="L-salarylist">
					<div class="L-salarylisttittle">
						<span class="date">合计&nbsp;&nbsp;(元)</span>
						
						<span @click.stop="seeingbtn()" class="biao"><i v-if="seeing==true" class="iconfont icon-yanjing"></i><i v-else="seeing==false" class="iconfont icon-biyan"></i></span>
					</div>
					<div class="L-salarylistinner clearfix L-salarytotal">
							<el-row>
								<el-col :span="6" class="list">
									<span class="totaltop">应发合计：&nbsp;&nbsp;</span>
									<span class="totalmoney"><span v-if="seeing==true">42580.00</span><span v-if="seeing==false">----</span></span>
								</el-col>
								<el-col :span="6" class="list">
									<span class="totaltop">应发合计：&nbsp;&nbsp;</span>
									<span class="totalmoney"><span v-if="seeing==true">42580.00</span><span v-if="seeing==false">----</span></span>
								</el-col>
								<el-col :span="6" class="list">
									<span class="totaltop">应发合计：&nbsp;&nbsp;</span>
									<span class="totalmoney"><span v-if="seeing==true">42580.00</span><span v-if="seeing==false">----</span></span>
								</el-col>
								<el-col :span="6" class="list">
									<span class="totaltop">应发合计：&nbsp;&nbsp;</span>
									<span class="totalmoney"><span v-if="seeing==true">42580.00</span><span v-if="seeing==false">----</span></span>
								</el-col>
								
								
							</el-row>
							
							
					</div>
				</li>
			</ul>
			<!--合计-->
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				seeing:true,//眼睛闭合
		        value1:'',
		        value2:"",
		        datahandle(input){//处理查询日期
					var d = new Date(input);
		    		var year = d.getFullYear();
		    		var month = Number(d.getMonth())+1 <10 ? '0' +(Number(d.getMonth())+1) : '' + (Number(d.getMonth())+1);
		    		return year+ '-' + month;
				},
				salarydata:""
			}
		},
		methods:{
			date1(res){
				this.value1=res;
			},
			date2(res){
				this.value2=res;
			},
			search(){

				if(this.value1>this.value2){
					 this.$message('开始时间不能大于结束时间');
				}else if(this.value1==''){
					 this.$message('开始时间不能为空');
				}else if(this.value2==''){
					 this.$message('结束时间不能为空');
				}else {
					//发送请求获取查询的数据
					console.log(this.value1+'to'+this.value2)
				}

				
			},
			seeingbtn(){
				this.seeing=!this.seeing;
			}
			
		},
		
		created(){
			 this.$http.get("static/salarydata1.json",{
		    	params:{
		    		
		    	}
	    	}).then(function (response) {
				console.log(response);
				this.salarydata=response.data.salarydata;
				
		   	}.bind(this)).catch(function (error1) {
		         this.$message.error('请求数据失败');
		    }.bind(this));
		}
		
	}
</script>

<style>
</style>