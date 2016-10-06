import api from 'src/api'
import * as types from 'src/vuex/types'

export function getAccount ({commit, state}, params) {
  return api.getAccount(params)
  .then((response) => {
    commit(types.GET_ACCOUNT_SUCCESS, response.data)
  })
  .catch((response) => {
    commit(types.GET_ACCOUNT_FAIL, response.data)
  })
}
