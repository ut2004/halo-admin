import Vue from 'vue'
import Vuex from 'vuex'

import post from './modules/post'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import option from './modules/option'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    app,
    user,
    permission,
    option
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters
})
