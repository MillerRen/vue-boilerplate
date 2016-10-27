import * as types from 'src/vuex/types'

var localStorage = window.localStorage

const state = {
  token: localStorage.getItem('token') || ''
}

const mutations = {
  [types.AUTH_LOGIN_SUCCESS] (state, data) {
    state.token = data.token
    localStorage.setItem('token', data.token)
  },
  [types.AUTH_LOGIN_FAIL] (state, err) {
    state.token = ''
    localStorage.setItem('token', '')
  },
  [types.LOGOUT] (state, err) {
    state.token = ''
    localStorage.setItem('token', '')
  }
}

export default {
  state,
  mutations
}
