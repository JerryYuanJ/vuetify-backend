const Login = () => import(/* webpackChunkName: 'user' */ '@/views/user/Login.vue')
const Register = () => import(/* webpackChunkName: 'user' */ '@/views/user/Register.vue')

export const user = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' }
]
