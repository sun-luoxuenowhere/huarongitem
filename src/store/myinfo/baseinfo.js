import axios from 'axios';  
import { validForm } from '@/assets/js/validform.js'; 
export default {
    state: {
    	//可编辑的基本信息字段
    	baseFormInit: {
    		"sex": '',
    		"officephone": '',
    		"mobile": '',
    		"email": '',
    		"nationality": '',
    		"birthdate": '',
    		"nativeplace": '',
    		"marital": '',
    		"polity": '',
    		"joinpolitydate": '',
    		"joinworkdate": '',
    		"health":'',
    		"bloodtype": '',
    		"country": '',
    		"permanreside": '',
    		"characterrpr": '',
    		"fileaddress": '',
    		"censusaddr": '',
    		"addr": '',
    		"addr_show": "",
    		"marriagedate": '' 
    	},
    	//基本信息[头像区域] 
    	baseInfo1: [{ "id": "photo", "text": "头像", "disabled": true },
			{ "id": "name", "text": "姓名", "disabled": true },
			{ "id": "sex", "text": "性别", "type": "radio", "typedata": [{"1": "男", "2": "女"}], "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
			{ "id": "deptname", "text": "部门", "disabled": true },
			{ "id": "jobname", "text": "职务", "disabled": true },
			{ "id": "code", "text": "人员编码", "disabled": true },
			{ "id": "postname", "text": "岗位", "disabled": true },
			{ "id": "officephone", "text": "电话", /*"valid": [{ validator: validForm.tel, required: true, trigger: 'change' }]*/ },
			{ "id": "mobile", "text": "手机", /*"valid": [{ validator: validForm.phone, required: true, trigger: 'change' }]*/ },
			{ "id": "email", "text": "邮箱", /*"valid": [{ validator: validForm.email, required: true, trigger: 'change' }] */}], 
		//基本信息[头像下方区域] 
    	baseInfo2: [{ "id": "nationality", "text": "民族", "type": "refer", "typedata": [{"code": "HR002_0xx"}], /*"valid": [{ required: true, message: '不能为空', trigger: 'change' }]*/},
			{ "id": "birthdate", "text": "出生日期", "type": "date", /*"valid": [{ required: true, message: '不能为空', trigger: 'change' }]*/ },
			{ "id": "country", "text": "国籍/地区", "type": "refer", "typedata": [{"code": "country", "cascPrevKey": 'pk_country'}],/* "valid": [{ required: true, message: '不能为空', trigger: 'change' }]*/ }, 
			{ "id": "idtype", "text": "证件类型", "disabled": true},
			{ "id": "id", "text": "证件号码", "disabled": true },
			{ "id": "marital", "text": "婚姻状况", "type": "refer", "typedata": [{"code": "HR001_0xx"}] },
			{ "id": "polity", "text": "政治面貌", "type": "refer", "typedata": [{"code": "HR011_0xx"}], /*"valid": [{ required: true, message: '不能为空', trigger: 'change' }]*/},
			{ "id": "joinpolitydate", "text": "入党(团)日期", "type": "date" },
			{ "id": "joinworkdate", "text": "参加工作日期", "type": "date" },
			{ "id": "health", "text": "健康状况", "type": "refer", "typedata": [{"code": "HR003_0xx"}] },
			{ "id": "bloodtype", "text": "血型", "type": "refer", "typedata": [{"code": "bloodtype"}] },
			{ "id": "nativeplace", "text": "籍贯", "disabled": true, "type": "region", "typedata": [{ "prevkey": "pk_country" }]/*"valid": [{ required: true, message: '不能为空', trigger: 'change' }] */},
			{ "id": "permanreside", "text": "户口所在地", "disabled": true, "type": "region", "typedata": [{ "prevkey": "pk_country" }] },
			{ "id": "characterrpr", "text": "户口性质", "type": "refer", "typedata": [{"code": "HR005_0xx"}], /*"valid": [{ required: true, message: '不能为空', trigger: 'change' }]*/ },
			{ "id": "fileaddress", "text": "档案所在地", "disabled": true, "type": "region", "typedata": [{ "prevkey": "pk_country" }] },
			{ "id": "censusaddr", "text": "户籍地址" },
			{ "id": "addr_show", "text": "家庭住址", "type": "region", "typedata": [{ "prevkey": "pk_country", "valkey": "addr" }] },
			{ "id": "marriagedate", "text": "结/离婚日期", "type": "date" }] 
    },
    mutations: {  
    },
    actions: { 
    }
}