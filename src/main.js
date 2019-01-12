import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 默认主题
import '../static/css/icon.css'
import 'babel-polyfill'
import echarts from 'echarts'

import htmlToPdf from '@/components/utils/htmlToPdf' // 导出Pdf
Vue.use(htmlToPdf)

axios.defaults.baseURL = 'http://172.105.200.91:8080/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$echarts = echarts

// 全局组件
import addModal from './components/modal/addModal'
import editModal from './components/modal/editModal'
import deleteModal from './components/modal/deleteModal'
import infoModal from './components/modal/infoModal'
import crumbs from './components/crumbs/crumbs'

Vue.use(Vuex)
Vue.component('deleteModal', deleteModal)
Vue.component('addModal', addModal)
Vue.component('editModal', editModal)
Vue.component('infoModal', infoModal)
Vue.component('crumbs', crumbs)

import mixins from './mixin/mixin'
Vue.mixin(mixins)

Vue.use(ElementUI, {
    size: 'small'
})
Vue.prototype.$axios = axios
import store from './store'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
