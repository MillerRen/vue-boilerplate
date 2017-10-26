import * as types from '@/store/types'

const state = {
  account: {
    name: ''
  }
}

const mutations = {
  [types.GET_ACCOUNT_SUCCESS] (state, account) {
    state.account = account
  },
  [types.GET_ACCOUNT_FAIL] (state, err) {
    state.account = {}
  },
  [types.AUTH_LOGOUT] (state, err) {
    state.account = {}
  }
}

export default {
  state,
  mutations
}
