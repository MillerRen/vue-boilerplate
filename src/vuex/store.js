import Vue from 'vue'
import Vuex from 'vuex'

import middlewares from './middlewares'
import mutations from './mutations'
import state from './state'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
  state: state,
  mutations,
  strict: false,
  middlewares: middlewares
})
