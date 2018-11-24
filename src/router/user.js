const Login = () => import(/* webpackChunkName: 'user' */ '@/views/user/Login.vue')

const user = [
  { path: '/login', component: Login, name: 'Login' }
]

export default user