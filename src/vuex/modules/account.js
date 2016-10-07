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
    console.log(err)
  }
}

export default {
  state,
  mutations
}
