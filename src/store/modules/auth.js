import * as API from '@/api'

const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL'
const AUTH_LOGOUT = 'AUTH_LOGOUT'

const state = {
  token: localStorage.getItem('token') || ''
}

const getters = {}

const mutations = {
  [AUTH_LOGIN_SUCCESS] (state, data) {
    state.token = data.token
    localStorage.setItem('token', data.token)
  },
  [AUTH_LOGIN_FAIL] (state, err) {
    state.token = ''
    localStorage.setItem('token', '')
  },
  [AUTH_LOGOUT] (state, err) {
    state.token = ''
    localStorage.setItem('token', '')
  }
}

const actions = {
  login ({commit}, data) {
    return API.Auth.post(data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
