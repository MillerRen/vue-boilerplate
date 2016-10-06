import api from 'src/api'
import * as types from 'src/vuex/types'

export function getAccount ({commit, state}, params) {
  return api.getAccount(params)
  .then((response) => {
    commit(types.GET_ACCOUNT_SUCCESS, response.body)
  })
  .catch((response) => {
    commit(types.GET_ACCOUNT_FAIL, response.body)
  })
}
