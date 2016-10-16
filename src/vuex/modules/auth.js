import * as types from 'src/vuex/types'

const state = {
  token: ''
}

const mutations = {
  [types.AUTH_LOGIN_SUCCESS] (state, data) {
    state.token = data.token
  },
  [types.AUTH_LOGIN_FAIL] (state, err) {
  }
}

export default {
  state,
  mutations
}
