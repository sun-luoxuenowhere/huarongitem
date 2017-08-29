<template> 
	<div v-if=" status== statusArry[0] ">
		<el-button type="text">{{statusMsg[0]}}</el-button>
		<el-button class="y-btn-danger" type="danger" size="small" @click="save">保存</el-button>
  		<el-button class="y-btn-default" size="small" @click="cancle">取消</el-button> 
	</div>
	<div v-else-if=" status== statusArry[1] ">
		<el-button type="text">{{statusMsg[1]}}</el-button>
		<el-button class="y-btn-danger" type="danger" size="small" @click="save">保存</el-button>
		<el-button size="small" @click="submit">提交</el-button>
  		<el-button size="small" @click="revert">还原</el-button> 
  		<el-button class="y-btn-default" size="small" @click="cancle">取消</el-button> 
	</div>
	<div v-else-if=" status== statusArry[2] ">
		<el-button type="text">{{statusMsg[2]}}</el-button>
		<el-button size="small" @click="callback">收回</el-button> 
	</div>
	<div v-else-if=" status== statusArry[3] ">
		<el-button type="text">{{statusMsg[3]}}</el-button>
		<el-button class="y-btn-danger" type="danger" size="small" @click="save">保存</el-button>
  		<el-button size="small" @click="cancle">取消</el-button> 
	</div>
	<div v-else-if=" status== statusArry[4] ">
		<el-button type="text">{{statusMsg[4]}}</el-button> 
  		<el-button size="small" @click="revert">还原</el-button> 
	</div>
</template>

<script>
	export default { 
		props: ['status'], 
		data(){
			return {
				statusArry: ['-1', '0', '1', '2', '3'],
				statusMsg: ['', '待提交', '待审核', '审核通过', '审核不通过'] 
			}
		},
		methods: {
			save(){
				this.$emit('save');
			},
			cancle(){
				this.$emit('cancle');
			},
			submit(){
				this.$emit('handle', ['commit']);
			},
			revert(){
				this.$emit('handle', ['revert']);
			},
			callback(){
				this.$emit('handle', ['callback']);
			}
		}
	};
</script>

<style>
</style>