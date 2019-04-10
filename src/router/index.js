import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: 'home' */ '@/views/Home.vue')
const DashBoard = () => import(/* webpackChunkName: 'home' */ '@/views/DashBoard.vue')

import user from './user'
import error from './error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      children: [
        {
          name: 'dashboard',
          path: '',
          component: DashBoard
        }
      ]
    },
    ...user,
    ...error,
    // any unknown router will fallback to dashboard
    {
      path: '*',
      redirect: '/404'
    }
  ]
})