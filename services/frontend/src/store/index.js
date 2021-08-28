import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import notes from './modules/notes'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notes,
    users
  },
  plugins: [createPersistedState()]
})
