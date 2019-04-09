import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/index'
import store from './store'
import axios from 'axios'

axios.get('/test.json')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
