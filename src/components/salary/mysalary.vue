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
		
		<!--查询界面开始-->
		<div class="L-salaryinner" v-show="salaryshow">
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
		<!--查询界面结束-->
		
		<!--查询登录界面开始-->
		<div class="L-salarylogin" :style="{height:loginheight+'px'}" v-show="login">
			<div class="L-salarywrap">
				<el-form :model="numberValidateForm" ref="numberValidateForm" style="margin-left: -50px;padding-top: 50%;" label-width="100px" class="demo-ruleForm">
				  <el-form-item
				    label="密码:"
				    prop="pass"
				    :rules="[
				      { required: true, message: '密码不能为空'}
				    ]"
				  >
				    <el-input type="age" v-model.number="numberValidateForm.pass" placeholder='请输入工资查询密码'  auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" class='' @click="submitForm('numberValidateForm')">查询</el-button>
				  </el-form-item>
				</el-form>
				<div>
					<el-button style="margin-left: 50px;" type="text" @click="reset()">重置密码</el-button><el-button style='font-size: 20px;color:  #979797;' type="text">|</el-button><el-button @click="modifypass()" type="text">修改密码</el-button>
					
					<div style="margin-top: 40px;">
						<div class="salarytext">1.为了保证您的薪资隐私安全，请输入密码进行操作；</div>
						<div class="salarytext">2.密码初始值为身份证后6位，登录后及时修改密码。</div>
					</div>
				</div>
			</div>
		</div>
		<!--查询登录界面结束-->
		<modifyPass :visible="showdialog"  @close="showdialog = false"></modifyPass>
	
	</div>
</template>

<script>
import modifyPass from '@/components/public/modifypass';
import Qs from 'qs';
	export default {
		
		data(){
			return {
				salaryshow:true,
				login:false,
				showdialog:false,//修改密码弹框
				seeing:true,//眼睛闭合
		        value1:'',
		        value2:"",
				salarydata:"",
				loginheight:'',
				numberValidateForm: {
		          pass: ''
		        }
			}
		},
		components:{
			modifyPass
		},
		methods:{
			date1(res){
				this.value1=res;
			},
			date2(res){
				this.value2=res;
			},
			reset(){//重置密码
				this.$http.post(this.$store.state.Interface.wa, Qs.stringify({
					transType: "handleWAPSWD",
					way: "reset"
				})).then((res) => {
					if(res.data.flag=='0'){
						if(res.data.result[0].flag=='0'){
							this.$message(res.data.result[0].des);
						}
					}else{
						this.$message.error( res.data.des );
					}
				}).catch((err) => {
					this.$message.error(err);
				})
			},
			modifypass(){
				this.showdialog=true;
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
			},
			submitForm(formName) {
				
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
//		            this.salaryshow=true;
					this.$http.post(this.$store.state.Interface.wa, Qs.stringify({
						transType: "handleWAPSWD",
						way: "check",
						passWord:this.numberValidateForm.pass
					})).then((res) => {
						console.log(res)
      					if(res.data.flag=='0'){
      						if(res.data.result==false){
      							this.$message.error('薪资查询密码不正确');
      						}else if(res.data.result==true){
      							this.salaryshow=true;
      							this.login=false;
      						}
						}else{
							this.$message.error( res.data.des );
						}
					}).catch((err) => {
						this.$message.error(err);
					})

		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		    }
			
		},
		
		created(){
			//右侧内容高度自适应的设置
			var winHeight='';
			if (window.innerHeight){
				winHeight = window.innerHeight;
			}else if ((document.body) && (document.body.clientHeight)){
				winHeight = document.body.clientHeight;
			}
			this.loginheight=winHeight-123;
			
			this.login=true;//初始需要登录才能查询薪资
			this.salaryshow=false;//初始不显示查询
		}
		
	}
</script>

<style>
	
</style>