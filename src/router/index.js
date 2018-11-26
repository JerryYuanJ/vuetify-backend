import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: 'home' */ '@/views/Home.vue')
const DashBoard = () => import(/* webpackChunkName: 'home' */ '@/views/DashBoard.vue')

import user from './user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          name: 'DashBoard',
          path: '',
          component: DashBoard
        }
      ]
    },
    ...user,
    // any unknown router will fallback to dashboard
    {
      path: '*',
      redirect: '/'
    }
  ]
})