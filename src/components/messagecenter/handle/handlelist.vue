<template>
	<div class="y-maincontent">
		<!-- y-breadcrumb-box begin -->
		<div class="y-breadcrumb-box">
			<el-breadcrumb separator="/"> 
			  <!--<el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>-->
			  <el-breadcrumb-item>消息中心</el-breadcrumb-item> 
			  <el-breadcrumb-item>待办消息</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!-- y-breadcrumb-box end -->
		<!-- y-inner begin -->
		<div class="y-inner">
			<div class="y-maintitle">
				待办消息
			</div>
			<!-- y-search-form begin -->
			<el-form :inline="true" :model="searchform" class="demo-form-inline y-search-form">
				<el-form-item label="发送日期">
					<el-select class="y-select" v-model="searchform.sendstr" placeholder="请输入查询时间">
					    <el-option class="y-option"
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select> 
				</el-form-item> 
				<el-form-item>
					<el-checkbox class="y-checkbox" v-model="searchform.isread">包含已读</el-checkbox> 
				</el-form-item> 
				<el-form-item>
					<el-checkbox class="y-checkbox" v-model="searchform.ishandled">包含已处理</el-checkbox> 
				</el-form-item> 
				<el-form-item>
					<el-button  class="y-btn-search" type="danger" @click="onSearch">查询</el-button>
				</el-form-item>
			</el-form>	 
			<!-- y-search-form end --> 			
			<MessageTable ref="InfoMsg" :url="url" :param="searchform" :judgedialog="judgedialog"></MessageTable>  
		</div>
		<!-- y-inner end -->   
	</div>
</template>

<script>   
	import MessageTable from '@/components/messagecenter/messagelist';
	export default { 
		components: { 
			MessageTable
		}, 
		computed: {
			url(){  
				return this.$store.state.Interface.msglist;
			}
		},
		data(){
			return {
				judgedialog:'handle',
				searchform: {
					sendStr: '',
					isRead: false,
					receiver: '1001A3100000000009CK',
					transType: 'msglist',
					msgType: 'worklist', 
					pageIndex: 0,
					isHandled: false
				},
				options: [{
		          value: 'week',
		          label: '一周内'
		        }, {
		          value: 'one',
		          label: '一个月内'
		        }, {
		          value: 'three',
		          label: '三个月内'
		        }, {
		          value: 'half',
		          label: '半年内'
		        }, {
		          value: 'year',
		          label: '一年内'
		        }] 
			}
		},
		methods:{  
		    //点击“查询”
		    onSearch(){ 
		    	this.$refs.InfoMsg.loadData( this.searchform );  //调用子组件的加载方法
		    } 
		},
		created(){ 
		}
	}
</script> 
<style>
</style>