<template>
	<el-menu default-active="a" unique-opened class="el-menu-vertical-demo" @select="handleSelect">
		<router-link to='/Index'>
			<el-menu-item index="a">
				<span class="y-icon-box">
					<i class="iconfont icon-shouye"></i>
				</span>
				<span class="el-cus-menu-text">首页</span>
			</el-menu-item>
		</router-link>
		
	   <el-submenu v-for="itemmenu in menudata" :index="itemmenu.id">
			<template slot="title">
				<span class="y-icon-box"><i :class="itemmenu.icon"></i></span>
				<span class="el-cus-menu-text">{{itemmenu.text}}</span>
			</template>
			<el-menu-item-group>
				<router-link v-for="(itemchildren,index) in itemmenu.children" :to="itemchildren.url" >
					<el-menu-item :index="itemchildren.id">
						{{itemchildren.text}}
					</el-menu-item> 
				</router-link>
			</el-menu-item-group>
		</el-submenu> 
    </el-menu>
</template> 

<script> 
	export default {
		props:['navdata'],
		data(){
			return {   
				
			}
		},
		computed:{
			menudata(){//计算菜单的数据
				var navdata=this.navdata;
				var newnavdata=[];
				return this.navdata
			}
		},
		
		methods:{
			handleSelect(key, keyPath) {//解决重新刷新的问题
		        console.log(key, keyPath);
//		        this.$router.go(0)
//		        this.$router.options.routes = []
//		        console.log( this.$router)
//		        this.$router.options.routes='Informmessage'
//				this.$router.push({
//		  			name:'/refresh'
//		  		});
//      		 this.$emit("refresh",args);
		  }
			
		}
	}
</script> 