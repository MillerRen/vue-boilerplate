import * as types from './types'

export default {
  [types.UPDATE_MESSAGE] (state, message) => {
  	state.message = message
  }
}
