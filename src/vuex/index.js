import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from 'src/vuex/actions'
import * as getters from 'src/vuex/getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
})

export default store
