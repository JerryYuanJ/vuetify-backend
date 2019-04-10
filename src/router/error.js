const NotFound = () => import(/* webpackChunkName: 'error' */ '@/views/error/404.vue')

const error = [
  { path: '/404', component: NotFound, name: 'not-found' }
]

export default error