import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: 'home' */ '@/views/Home.vue')
const DashBoard = () => import(/* webpackChunkName: 'home' */ '@/views/DashBoard.vue')
const Timeline = () => import(/* webpackChunkName: 'home' */ '@/views/ProjectTimeline.vue')

import user from './user'
import error from './error'

Vue.use(Router)

const glabal = [
  {
    name: 'dashboard',
    path: '',
    component: DashBoard
  },
  {
    path: 'timeline',
    component: Timeline,
    name: 'timeline'
  }
];

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      children: [
        ...glabal,
        ...user
      ]
    },
    ...error,
    // any unknown router will fallback to dashboard
    {
      path: '*',
      redirect: '/404'
    }
  ]
})