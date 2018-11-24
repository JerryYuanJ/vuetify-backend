import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideMenuVisible: true
  },
  mutations: {
    toggleSideMenu(state){
      state.sideMenuVisible = !state.sideMenuVisible
    }
  },
  actions: {

  }
})
