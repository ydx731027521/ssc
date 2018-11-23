import Vue from 'vue'
import App from './App'
import router from './router'
import Andt from 'ant-design-vue'
import  'ant-design-vue/dist/antd.css'
import  '@/common/gong.css'
Vue.use(Andt)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
