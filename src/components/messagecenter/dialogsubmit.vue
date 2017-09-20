<template>  
	<div class="y-msg-dialog">
		<div>
			<el-dialog :title="title"  :show-close="false" :visible="dialogvisible" size="tiny">
				<div v-show="true">
					<div class="y-dialog-body">
						
					</div> 
				  	<div slot="footer" class="y-dialog-footer">
				    	<el-button class="y-btn-search" type="danger" @click="beRead">我知道了</el-button> 
				  	</div>
				</div>
				
			</el-dialog>
		</div>
	</div>
</template> 
<script>   


export default {  

	data(){
		return {
			dialogvisible:false
		}
	},
	methods:{
		
	} 
};
</script> 