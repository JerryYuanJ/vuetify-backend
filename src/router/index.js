import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: 'user' */ '@/views/Home.vue')

import user from './user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    ...user
  ]
})