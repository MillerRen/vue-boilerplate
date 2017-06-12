import * as types from 'src/store/types'

const state = {
  message: ''
}

const mutations = {
  [types.TOAST_MESSAGE] (state, message) {
    state.message = message
  }
}

export default {
  state,
  mutations
}
