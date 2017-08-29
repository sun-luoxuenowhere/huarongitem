import axios from 'axios'; 

export default {
    state: {
    	baseInfo: [], //基本信息 
    	//工作记录表头
    	workTheadData: [{ param: ['begindate','enddate'], text: '发送时间' },
	    	{ param: 'org_name', text: '组织' },
	    	{ param: 'dept_name', text: '部门' },
	    	{ param: 'postname', text: '岗位' },
	    	{ param: 'jobname', text: '职务'},
	    	{ param: 'jobgradename', text: '职级' },
	    	{ param: 'jobrankname', text: '职等' },
	    	{ param: 'trnsevent', text: '异动事件' },
	    	{ param: 'trnstypename', text: '异动类型' },
	    	{ param: 'transtypereason', text: '异动原因' }],
	    //履历记录表头
	    jobTheadData: [{ param: ['begindate','enddate'], text: '起止时间', required: true },
	    	{ param: 'workcorp', text: '工作单位', required: true },
	    	{ param: 'workdept', text: '部门' },
	    	{ param: 'workpost', text: '岗位' },
	    	{ param: 'workjob', text: '职务' },
	    	{ param: 'certifier', text: '证明人' },
	    	{ param: 'memo', text: '备注' }], 
	    //身份证表头
	    psncertTheadData: [{ param: 'idtype', text: '证件类型' },
	    	{ param: 'id', text: '证件号码' },
	    	{ param: 'begindate', text: '发证日期' },
	    	{ param: 'enddate', text: '有效期限' },
	    	{ param: 'extend_org', text: '发证机构' }],
	    //家庭信息表头
	    jiatingTheadData: [
	    	{ param: 'mem_relation', text: '与本人关系' },
	    	{ param: 'mem_name', text: '家庭成员姓名' },
	    	{ param: 'mem_birthday', text: '出生日期' },
	    	{ param: 'mem_corp', text: '工作单位' },
	    ],
	    //合同信息表头
	    hetongTheadData: [{ param: 'conttype', text: '业务类型' },
	    	{ param: 'signdate', text: '业务发生日期' },
	    	{ param: 'termtype', text: '合同期限类型' },
	    	{ param: 'begindate', text: '合同起止日期' },
	    	{ param: 'probegindate ', text: '试用起止日期' },
	    	{ param: 'majorcorp', text: '合同主体单位' },
	    	{ param: 'signaddr', text: '签订地点' }], 
	    //学历信息表头
	    xueliTheadData: [{ param: ['begindate','enddate'], text: '起止时间', required: true },
	    	{ param: 'school', text: '学校', required: true },
	    	{ param: 'major', text: '专业' },
	    	{ param: 'education', text: '学历' },
	    	{ param: 'degree', text: '学位' },
	    	{ param: 'studymode', text: '学习方式' }],
	    //职称表头
	    zhichenTheadData: [{ param: ['begindate','enddate'], text: '起止时间', required: true },
	    	{ param: 'pk_techposttitle', text: '获得职称', required: true },
	    	{ param: 'titlerank', text: '职称等级' },
	    	{ param: 'assorg', text: '评定机构' },
	    	{ param: 'certifcode', text: '证书编号' },
	    	{ param: 'tiptop_flag', text: '最高' }],
	    //党派表头
	    dangpaiTheadData: [{ param: ['begindate','enddate'], text: '起止时间', required: true },
	    	{ param: 'partydate', text: '参加时间', required: true },
	    	{ param: 'partyname', text: '政治面貌及党籍情况', required: true },
	    	{ param: 'partyunit', text: '参加党派时所在单位', required: true },
	    	{ param: 'partypsn', text: '介绍人', required: true },
	    	{ param: 'partyduedate', text: '转正时间', required: true }],
	    //奖励表头
	    jiangliTheadData: [{ param: 'encourdate', text: '奖励日期', required: true },
	    	{ param: 'encourtype', text: '奖励类型', required: true },
	    	{ param: 'encourrank', text: '奖励级别', required: true },
	    	{ param: 'encourorg', text: '奖励机构', required: true },
	    	{ param: 'encourmatter', text: '奖励事由', required: true }],
	    //履历表单配置
	    jobFormConfig: [{ "id": "begindate", "text": "开始日期", "type": "date", "valid": [{ required: true, message: '不能为空', trigger: 'change' }]},
	    	{ "id": "enddate", "text": "结束日期", "type": "date", "valid": [{ required: true, message: '不能为空', trigger: 'change' }]},
	    	{ "id": "workcorp", "text": "工作单位", "valid": [{ required: true, message: '不能为空', trigger: 'change' }]},
	    	{ "id": "workdept", "text": "部门", "valid": [{ required: true, message: '不能为空', trigger: 'change' }] }, 
	    	{ "id": "workpost", "text": "岗位", "valid": [{ required: true, message: '不能为空', trigger: 'change' }] }, 
	    	{ "id": "workjob", "text": "职务" }, 
	    	{ "id": "certifier", "text": "证明人" }, 
	    	{ "id": "memo", "text": "备注" }],
	    //合同表单配置
	    hetongFormConfig: [{ "id": "conttype", "text": "业务类型" },
	    	{ "id": "begindate", "text": "合同开始日期", "type": "date" },
	    	{ "id": "enddate", "text": "合同结束日期", "type": "date"  },
	    	{ "id": "signdate", "text": "业务发生日期", "type": "date"  }, 
	    	{ "id": "majorcorp", "text": "合同主体单位" }, 
	    	{ "id": "termtype", "text": "合同期限类型" },
	    	{ "id": "memo", "text": "备注" },
	    	{ "id": "probegindate", "text": "试用结束日期", "type": "date"  },
	    	{ "id": "probenddate ", "text": "试用结束日期", "type": "date"  },
	    	{ "id": "signaddr", "text": "签订地点" }],
	    //学历表单配置
	    xueliFormConfig: [{ "id": "enddate", "text": "毕业日期", "type": "date", "valid": [{ required: true, message: '不能为空', trigger: 'change' }]  },
	    	{ "id": "begindate", "text": "入学日期", "type": "date", "valid": [{ required: true, message: '不能为空', trigger: 'change' }]  }, 
	    	{ "id": "school", "text": "学校", "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "major", "text": "专业" },
	    	{ "id": "education", "text": "学历", "type": "refer", "typedata": [{"code": "HR008_0xx"}] },
	    	{ "id": "degree", "text": "学位", "type": "refer", "typedata": [{"code": "HR009_0xx"}] },
	    	{ "id": "studymode", "text": "学习方式", "type": "refer", "typedata": [{"code": "HR023_0xx"}] }],
	    //身份证表单配置
	    psncertFormConfig: [{ "id": "idtype", "text": "证件类型", "type": "refer", "typedata": [{"code": "idtype"}], "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "id", "text": "证件号码", "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "extend_org", "text": "发证机构" },
	    	{ "id": "begindate", "text": "发证日期", "type": "date" },
	    	{ "id": "enddate", "text": "有限期限", "type": "date" }],
	    //家庭表单配置
	    jiatingFormConfig: [{ "id": "mem_relation", "text": "与本人关系", "type": "refer", "typedata": [{"code": "HR024_0xx"}], "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "mem_name", "text": "家庭成员姓名", "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "mem_corp", "text": "工作单位" },
	    	{ "id": "mem_birthday", "text": "出生日期", "type": "date" }],
	    //职称表单配置
	    zhichenFormConfig: [{ "id": "begindate", "text": "评定日期", "type": "date", "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "enddate", "text": "结束时间", "type": "date" },
	    	{ "id": "pk_techposttitle", "text": "获得职称", "type": "refer", "typedata": [{"code": "HR019_0xx"}], "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "titlerank", "text": "职称等级", "typedata": [{"code": "HR025_0xx"}] },
	    	{ "id": "assorg", "text": "评定机构" },
	    	{ "id": "certifcode", "text": "证书编号" },
	    	{ "id": "tiptop_flag", "text": "最高"}],
	    //党派表单配置
	    dangpaiFormConfig: [{ "id": "begindate", "text": "开始时间", "type": "date", "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "enddate", "text": "结束时间", "type": "date" },
	    	{ "id": "partydate", "text": "参加时间", "type": "date", "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "partyduedate", "text": "转正时间", "type": "date"},
	    	{ "id": "partyname", "text": "政治面貌及党籍情况", "type": "refer", "typedata": [{"code": "HR011_0xx"}], "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "partyunit", "text": "参加党派时所在单位" },
	    	{ "id": "partypsn", "text": "介绍人" }],
	    //奖励表单配置
	    jiangliFormConfig: [{ "id": "encourdate", "text": "奖励日期", "type": "date", "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "encourtype", "text": "奖励类型", "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "encourrank", "text": "奖励级别", "type": "refer", "typedata": [{"code": "HR026_0xx"}], "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "encourorg", "text": "奖励机构", "valid": [{ required: true, message: '不能为空', trigger: 'change' }] },
	    	{ "id": "encourmatter", "text": "奖励事由", "valid": [{ required: true, message: '不能为空', trigger: 'change' }] }] 
    },
    mutations: { 
        SET_BASE_INFO( state, { list } ){
        	state.baseInfo = list;
        } 
    },
    actions: {
    	//请求基本信息数据
    	loadbaseinfo({commit}, url) { 
            axios.get( url ).then((response) => {
				commit('SET_BASE_INFO', { list: response.data } )
	    	}).catch((err) => { 
	    		
			}); 
        }
    }
}