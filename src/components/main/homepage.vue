<template>
	<div>   
		<employeePage v-show="judgeyg"></employeePage>
	</div>
</template>

<script> 	
import employeePage from './employeepage';
export default{ 
	data(){
		return {
			judgeyg:false,
			judgeld:false 
		}
	},
	components: {
		employeePage
	},
   created() {
   	var userid=window.localStorage.getItem('userid');
   		//判断是领导还是员工还是经理。。。。。。
     	if(userid){
     		this.judgeyg=true;
     	}	
   }
}
</script>
 