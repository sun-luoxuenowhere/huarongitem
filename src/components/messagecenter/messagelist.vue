<template>  
	<div>
		<el-table class="y-table" stripe  
    		element-loading-text="拼命加载中" 
    		:data="tableData" 
    		:row-class-name='setunReadRow'
			@row-click="onRowClick">
			<el-table-column class-name="y-col-subject" prop="subject" label="主题" width="200"></el-table-column>
		  	<el-table-column prop="content" label="正文"></el-table-column>
		   	<el-table-column prop="sender" label="发件人" width="150"></el-table-column>
		  	<el-table-column prop="sendtime" label="发送时间" width="200"></el-table-column>
		</el-table> 
		<div class="y-pagination" v-show='totalcount > pagesize'>   
			<el-pagination layout="total, sizes, prev, pager, next, jumper"
				:page-size="pagesize"
				:page-sizes="[5, 10, 15, 20]" 
			    :total="totalcount"
			  	@current-change="pageChange"
			  	@size-change="sizeChange"
			>
			</el-pagination>
		</div>
		<MessageDialog :dialogvisible="openDialog" :data="msgdata" :judgedialog="judgedialog"
			@close="openDialog = false"
			@read="msgRead" >
		</MessageDialog> 
	</div>
</template> 
<script>   
import Qs from 'qs';

import MessageDialog from '@/components/messagecenter/dialogmsg';
export default { 
	props: ['url', 'param','judgedialog'],  
	components: { 
		MessageDialog
	}, 
	mounted(){ 
		this.param.pageSize = this.pagesize;
		this.loadData( this.param );
	}, 
	data(){
		return { 
			msgdata: '', //消息数据 
			openDialog: false, //默认关闭对话框
			pagesize: 5, //每页显示多少条
			totalcount: 0, //总条目数
    		tableData: [],
    		loadingFlag: false
		}
	},
	methods:{  
		//改变当前页码
		pageChange( page ){ 
			this.param.pageIndex = page - 1;
			this.loadData( this.param );  
		},
		//改变每页显示条数
		sizeChange( size ){
			this.pagesize = size;
			this.param.pageSize = size;
			this.loadData( this.param );  
		},
		//加载列表数据
		loadData( param ){   
			var _param = this.deepClone( param, {} );  
			_param.isRead = _param.isRead ? 'Y' : 'N'; 
			_param.isHandled = _param.isHandled ? 'Y' : 'N'; 
			
			//获取列表数据；
			this.$http.post( this.url, Qs.stringify ( _param ), { 
	          	headers: {
	                'Content-Type': 'application/x-www-form-urlencoded;charset=gbk'
	          	}
	      	}).then(( response ) => {  
				var _data = response.data; 
				if( _data.flag == "1" ){ //操作失败
					this.$message.error( _data.des );
				}else{
					this.tableData = _data.msglist;
					this.totalcount = parseInt( _data.totalcount );  
				}; 
			}).catch((err) => { 
				this.$message.error( err );
			}); 
		
			
			
		},
		//对象深拷贝 initalObj: 原始对象，finalObj：需要被赋值的目标对象
		deepClone( initalObj, finalObj ) {
			
		 	var obj = finalObj || {};
		 	
  			for (var i in initalObj) {        
    			var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    			if(prop === obj) {            
      				continue;
    			}        
    			if (typeof prop === 'object') {
      				obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
    			} else {
      				obj[i] = prop;
    			}
  			};    
 			return obj;
		},
		//设置未读消息样式
		setunReadRow(row, index){ 
			 if( row.ishandled == "N" ){
			 	return 'y-unread-row';
			 }
		}, 
		//点击行列表
	    onRowClick( row ) { 
	    	this.openDialog = true; 
	    	this.msgdata = row;
	    	this.msgdata.msgtype = this.param.msgtype;
	    },
	    //消息被置为已读
	    msgRead(){  
	    	this.openDialog = false;
	    	this.loadData( this.param );  
	    }
	} 
};
</script>

<style>
	
</style> 