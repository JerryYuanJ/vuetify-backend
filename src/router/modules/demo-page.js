const MultiColumn = () => import(/* webpackChunkName: 'error' */ '@/views/data-display/MultiColumn.vue')

const demoPages = [
  { path: '/multi-col', component: MultiColumn, name: 'multi-col' }
]

export default demoPages