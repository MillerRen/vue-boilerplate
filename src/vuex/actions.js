import * as types from './types'
import api from '../api'

export const setMessage = ({dispatch}, message) => {
  dispatch(types.UPDATE_MESSAGE, message)
}
