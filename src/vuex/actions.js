import * as API from 'src/api'
import * as types from 'src/vuex/types'

export function getAccount ({commit, state}, params) {
  return API.Account.get(params)
  .then((response) => {
    commit(types.GET_ACCOUNT_SUCCESS, response.body)
  })
  .catch((response) => {
    commit(types.GET_ACCOUNT_FAIL, response.body)
  })
}

export function login ({commit}, params) {
  return API.Auth.login(params)
  .then((response) => {
    commit(types.AUTH_LOGIN_SUCCESS, response.body)
  })
  .catch((response) => {
    commit(types.AUTH_LOGIN_FAIL, response.body)
  })
}
