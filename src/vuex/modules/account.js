import * as types from 'src/vuex/types'

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
    console.log(err)
  }
}

export default {
  state,
  mutations
}
