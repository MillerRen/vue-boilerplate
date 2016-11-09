import * as types from 'src/vuex/types'

const state = {
  account: {
    name: ''
  },
  loggedIn: false
}

const mutations = {
  [types.GET_ACCOUNT_SUCCESS] (state, account) {
    state.account = account
    state.loggedIn = true
  },
  [types.GET_ACCOUNT_FAIL] (state, err) {
    state.loggedIn = false
    state.account = {}
  },
  [types.AUTH_LOGIN_SUCCESS] (state, account) {
    state.account = account
    state.loggedIn = true
  },
  [types.AUTH_LOGIN_FAIL] (state, err) {
    state.loggedIn = false
    state.account = {}
  }
}

export default {
  state,
  mutations
}
