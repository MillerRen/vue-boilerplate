import Vue from 'vue'
import Vuex from 'vuex'

import middlewares from './middlewares'
import message from './modules/message'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    message
  },
  strict: false,
  middlewares: middlewares
})

