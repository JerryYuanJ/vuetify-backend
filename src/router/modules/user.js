const Login = () => import(/* webpackChunkName: 'user' */ '@/views/user/Login.vue')

const user = [
  { path: '/login', component: Login, name: 'login' }
]

export default user