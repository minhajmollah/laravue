
import Vue from 'vue'
import App from '../components/App.vue'
import router from './router.js'
import axios from 'axios'
window.axios='axios';
axios.defaults.baseURL="http://127.0.0.1:8000/api"
let token=localStorage.getItem('AToken');
axios.defaults.headers.common['Authorization']='Bearer'+token;
axios.defaults.headers.post['Content-Type']='application/json'
import Antd from 'ant-design-vue'
import   'ant-design-vue/dist/antd.css'
import { FormModel } from 'ant-design-vue';
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(FormModel);

new Vue({
 
   
    router,
  render: h => h(App),
}).$mount('#app')








