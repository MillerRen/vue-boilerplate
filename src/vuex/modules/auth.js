import * as types from 'src/vuex/types'

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
  [types.AUTH_LOGOUT] (state, err) {
    state.token = ''
    localStorage.setItem('token', '')
  }
}

export default {
  state,
  mutations
}
