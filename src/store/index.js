import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import account from './modules/account'
import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    account,
    auth
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
})

export default store
