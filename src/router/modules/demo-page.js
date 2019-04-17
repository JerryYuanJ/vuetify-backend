const MultiColumn = () => import(/* webpackChunkName: 'demo' */ '@/views/data-display/MultiColumn.vue')

const demoPages = [
  { path: '/multi-col', component: MultiColumn, name: 'multi-col' }
]

export default demoPages