import Vue from 'vue'
import Vuex from 'vuex'
// vue uses veux component (access store in all vue compponent)
Vue.use(Vuex)
// create store
export default new Vuex.Store({
// can never modify state unless through a mutation
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  // invoke actions(they are like event names) from vue component
  // do async call
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    // do async call
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
