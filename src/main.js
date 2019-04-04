import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/index'
import store from './store'
import axios from 'axios'

axios.get('/test.json')
axios.get('/test2.json')
axios.get('/test3.json')
axios.get('/test4.json')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
