import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    homeRouter,
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})
