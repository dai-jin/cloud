// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import remConfig from './config/remConfig'
import './assets/css/common.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Scroller from '@/components/Scroller'
import store from './stores'
Vue.use(ElementUI)
// eslint-disable-next-line import/first
Vue.prototype.axios = axios
Vue.component('Scroller', Scroller)
// 设置成rem自适应屏幕
remConfig()
/* eslint-disable no-new */
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
