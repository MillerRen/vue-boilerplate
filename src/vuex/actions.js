import * as types from './types'
import api from '../api'

export const setMessage = ({dispatch}, message) => {
  dispatch(types.UPDATE_MESSAGE, message)
}

export const getMessage = ({dispatch}, message) => {
  return api.getMessage()
  .then((response) => {
    dispatch(types.UPDATE_MESSAGE, response.message)
  })
  .catch((response) => {
    dispatch(types.UPDATE_MESSAGE, response.err)
  })
}
