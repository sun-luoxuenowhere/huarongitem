<template>
	<el-select v-model="selectedval" :disabled="!(editabled && !disabled)" @change="onChange" filterable placeholder="请选择">
	    <el-option
		      v-for="item in optionsdata"
		      :key="item.code"
		      :label="item.name"
		      :value="item.pk_defdoc">
	    </el-option>
	  </el-select> 
</template>

<script>
import { ajaxData } from '@/assets/js/ajaxdata.js';
export default {
  	props: ['url', 'id', 'val', 'disabled', 'editabled'],
    data() {
      return {  
      	selectedval: '',
      	optionsdata: []
      }
    },  
    mounted() { 
    	this.loadData();  
    },
    methods: {
    	loadData(){ 
    		ajaxData( this.url, ( res ) => {    
    			this.optionsdata =  res;    
				this.selectedval = this.val;  
	    	});  
    	},
    	onChange( val ){
    		var _id = this.id;  
    		var _obj = {};
    		_obj[_id] = val;
    		this.$emit( 'change', _obj ); 
    	}
    }
}
</script>