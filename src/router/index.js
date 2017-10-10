import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login/login';//登录引用
import Index from '@/components/main/index';//公共部分
import homepage from '@/components/main/homepage';//主页内容
import refresh from '@/components/public/refresh';//菜单刷新
//我的信息部分
import myInfo from '@/components/person/myinfo/info';
import Employeelist from '@/components/person/employee/list';  
import Employeeinfo from '@/components/person/employee/info';   
//业务办理部分
//import Fullapplicationlist from '@/components/Business/Fullapplication/Fullapplicationlist';
//import Fullapplicationadd from '@/components/Business/Fullapplication/Fullapplicationadd';
//import Fullapplicationdetails from '@/components/Business/Fullapplication/Fullapplicationdetails';

//消息中心
import Warningmessagelist from '@/components/messagecenter/warning/warninglist';
import Informmessagelist from '@/components/messagecenter/inform/informlist';
import Handlemessagelist from '@/components/messagecenter/handle/handlelist';

//薪资查询
import Mysalary from '@/components/salary/mysalary';

////考核测评
//import Assessmentlist from '@/components/assessment/assessmentlist';
//import Assessmentmsg from '@/components/assessment/assessmentmsg';
//import ldpjlist from '@/components/assessment/ldlist';
//import zzpflist from '@/components/assessment/zzpflist';
//import zzpfmsg from '@/components/assessment/zzpfmsg';
//import zzpfmsgls from '@/components/assessment/zzpfmsgls';
//import zzpfyg from '@/components/assessment/zzpfyg';
//import hbgxlist from '@/components/assessment/hbgxlist';
//import mdshlist from '@/components/assessment/mdshlist';



Vue.use(Router)


export default new Router({  
  routes: [
  	{
  	  path: '/',
      name: '/Login',
      component: Login
  	},
    {
      path: '/Index',
      name: '/Index',
      component: Index,
		  children: [  
		    { 
		    	path: "/",
		    	name: '/homepage',
		    	component: homepage 
		    },
		    {
		    	path: "/myInfo",
		    	name: '/myInfo',
		    	component: myInfo 
		    },
		    {
		    	path: "/Employeelist",
		    	name: '/Employeelist',
		    	component: Employeelist 
		    }, 
		    {
		    	path: "/Employeeinfo/:id",
		    	name: '/Employeeinfo',
		    	component: Employeeinfo 
		    },
		    {
		    	path: "/Warningmessagelist",
		    	name: '/Warningmessagelist',
		    	component: Warningmessagelist 
		    },
		    {
		    	path: "/Informmessagelist",
		    	name: '/Informmessagelist',
		    	component: Informmessagelist 
		    },
		    {
		    	path: "/Handlemessagelist",
		    	name: '/Handlemessagelist',
		    	component: Handlemessagelist 
		    },
		    {
		    	path: "/Mysalary",
		    	name: '/Mysalary',
		    	component: Mysalary 
		    }
		    
		  ]  
    }
    
  ]
})
