import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
Vue.use(VueResource);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug
})