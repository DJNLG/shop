import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    name: '',
    userInfo: null
  },
  mutations: {
    getUserInfo (state, info) {
      state.name = info.name
    }
  },
  actions: {},
  getters: {}
})
