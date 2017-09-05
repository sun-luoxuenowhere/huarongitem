import Vue from 'vue'
import Vuex from 'vuex' 
import BaseInfo from './myinfo/baseinfo'
import Information from './myinfo/subinfo'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    state: {
    	//数据接口   获取方法：[this.$store.state.Interface.information] 
    	Interface: {
    		'msglist': '/service/EHRWebHiServlet',
    		'msglogin': '/service/EHRWebSmServlet',
    		'information': '/service/EHRWebHiServlet',
    		'smserverlet': '/service/EHRWebSmServlet' //参照类型数据接口
    	},
    	UserInfo: {
    		'pk_psndoc': '0001A310000000000JWA',
    		'cuserid': '1001A3100000000009CK',
    		'pk_group': '0001A3100000000007Q7',
    		'pk_org': '0001A310000000000JDR'
    	},
    	ReferInit: { //固定的参照类型数据
    		//身份证类型
    		'idtype': [{'code': 'CN01', 'name': '身份证', 'pk_defdoc': '1001Z01000000000AI36'},
    			{'code': 'CN02', 'name': '护照', 'pk_defdoc': '1001Z01000000000CHUJ'},
    			{'code': 'CN03', 'name': '回乡证', 'pk_defdoc': '1001Z01000000000CHUL'},
    			{'code': 'CN04', 'name': '外国人永久居留证', 'pk_defdoc': '1001Z01000000000CHUP'},
    			{'code': 'HK01', 'name': '香港居民身份证', 'pk_defdoc': '1001Z01000000000CHUK'},
    			{'code': 'MO01', 'name': '澳门居民身份证', 'pk_defdoc': '1001Z01000000000CHUN'},
    			{'code': 'TW01', 'name': '台湾身份证', 'pk_defdoc': '1001Z01000000000CHUM'},
    			{'code': 'TW02', 'name': '台胞证', 'pk_defdoc': '1001Z01000000000CHUO'}],
    		'bloodtype': [{'code': '1', 'name': 'O', 'pk_defdoc': '1'},
    			{'code': '2', 'name': 'A', 'pk_defdoc': '2'},
    			{'code': '3', 'name': 'B', 'pk_defdoc': '3'},
    			{'code': '4', 'name': 'AB', 'pk_defdoc': '4'},
    			{'code': '5', 'name': '其他', 'pk_defdoc': '5'}]
    	}
    },
    modules: { 
        Information, //员工信息——工作履历
        BaseInfo
    }
});   