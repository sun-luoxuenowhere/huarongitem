// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import router from './router'; 
import store from './store/'


import 'babel-polyfill';
import './assets/css/iconfont.css';
//import Store from 'store';
import axios from 'axios'; 
import './assets/css/Lstyle.css';
import './assets/css/Ystyle.css';

Vue.prototype.$http = axios;
Vue.use(ElementUI)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }, 
  mounted(){
	
  }
})
