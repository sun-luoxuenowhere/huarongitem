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
    		"addr_show": '',
    		"marriagedate": '',
    		"glbdef14": '',
    		"glbdef3": '',
    		"homephone": '',
    		"postalcode": '',
    		"usedname": '',
    		"penelauth": ''
    	},
    	
    	//基本信息[头像区域] 
    	baseInfo1: [{ "id": "photo", "text": "头像", "disabled": true },
			{ "id": "name", "text": "姓名:", "disabled": true },
			{ "id": "sex", "text": "性别:", "disabled": true, "type": "radio", "typedata": [{"1": "男", "2": "女"}] },
//			{ "id": "sex", "text": "性别", "disabled": true, },
			//{ "id": "deptname", "text": "部门", "disabled": true },
			//{ "id": "jobname", "text": "职务", "disabled": true },
			//{ "id": "code", "text": "人员编码", "disabled": true },
			//{ "id": "postname", "text": "岗位", "disabled": true },
			{ "id": "idtype", "text": "证件类型:", "disabled": true},
			{ "id": "id", "text": "证件号码:", "disabled": true },
			{ "id": "glbdef1", "text": "集团邮箱:", "disabled": true },
    		{ "id": "glbdef2", "text": "单位邮箱:", "disabled": true },
			{ "id": "officephone", "text": "电话:","valid": [{ validator: validForm.tel,required: true, trigger: 'change' }] },
			{ "id": "mobile", "text": "手机:", "valid": [{ validator: validForm.phone, required: true, trigger: 'change' }] },
			//{ "id": "email", "text": "邮箱", /*"valid": [{ validator: validForm.email, required: true, trigger: 'change' }] */}
			],
			
		//基本信息[头像下方区域] 
    	baseInfo2: [{ "id": "nationality", "text": "民族:", "type": "refer", "typedata": [{"code": "HR002_0xx"}], /*"valid": [{ required: true, message: '不能为空', trigger: 'change' }]*/},
			{ "id": "birthdate", "text": "出生日期(身份证):", "type": "date" },
			{ "id": "country", "text": "国籍/地区:", "type": "refer", "typedata": [{"code": "country", "cascPrevKey": 'pk_country'}],/* "valid": [{ required: true, message: '不能为空', trigger: 'change' }]*/ }, 
			
			{ "id": "marital", "text": "婚姻状况:", "type": "refer", "typedata": [{"code": "HR001_0xx"}] },
			{ "id": "polity", "text": "政治面貌:", "type": "refer", "typedata": [{"code": "HR011_0xx"}], /*"valid": [{ required: true, message: '不能为空', trigger: 'change' }]*/},
			{ "id": "joinpolitydate", "text": "入党(团)日期:", "type": "date" },
			{ "id": "joinworkdate", "text": "参加工作日期:", "type": "date" },
			{ "id": "health", "text": "健康状况:", "type": "refer", "typedata": [{"code": "HR003_0xx"}] },
			{ "id": "bloodtype", "text": "血型:", "type": "refer", "typedata": [{"code": "bloodtype"}] },
			{ "id": "nativeplace", "text": "籍贯:", "disabled": true, /*"type": "region", "typedata": [{ "prevkey": "pk_country" }] */},
			{ "id": "permanreside", "text": "户口所在地:", "disabled": true, "type": "region", "typedata": [{ "prevkey": "pk_country" }] },
			{ "id": "characterrpr", "text": "户口性质:", "type": "refer", "typedata": [{"code": "HR005_0xx"}], /*"valid": [{ required: true, message: '不能为空', trigger: 'change' }]*/ },
			{ "id": "fileaddress", "text": "档案所在地:", "disabled": true, "type": "region", "typedata": [{ "prevkey": "pk_country" }] },
			{ "id": "censusaddr", "text": "户籍地址:" },
			{ "id": "addr_show", "text": "家庭住址:", "type": "region", "typedata": [{ "prevkey": "pk_country", "valkey": "addr" }] },
			{ "id": "marriagedate", "text": "结/离婚日期:", "type": "date" },
    		{ "id": "glbdef14", "text": "出生地:", "disabled": true, "type": "region", "typedata": [{ "prevkey": "pk_country" }] },
    		
    		{ "id": "glbdef3", "text": "个人邮箱:", "valid": [{ validator: validForm.email, trigger: 'change' }] },
    		{ "id": "homephone", "text": "家庭电话:", "valid": [{ validator: validForm.tel, trigger: 'change' }] },
    		{ "id": "postalcode", "text": "邮政编码:", "valid": [{ validator: validForm.num, trigger: 'change' }] },
    		{ "id": "usedname", "text": "曾用名:" },
    		{ "id": "penelauth", "text": "个人身份:", "type": "refer", "typedata": [{"code": "HR004_0xx"}] },
    		{ "id": "age", "text": "年龄（身份证）:", "disabled": true },
    		{ "id": "glbdef6", "text": "进入金融行业时间:", "disabled": true },
    		{ "id": "glbdef9", "text": "进入经济等相关行业时间:", "disabled": true },
    		{ "id": "glbdef15", "text": "出生日期（档案）:", "disabled": true },
    		{ "id": "edu", "text": "全日制最高学历:", "disabled": true },
    		{ "id": "pk_degree", "text": "全日制最高学位:", "disabled": true },
    		{ "id": "glbdef16", "text": "非全日制最高学历:", "disabled": true },
    		{ "id": "glbdef17", "text": "非全日制最高学位:", "disabled": true },
    		{ "id": "glbdef18", "text": "年龄（档案）:", "disabled": true }]
    },
    mutations: {  
    },
    actions: { 
    }
}