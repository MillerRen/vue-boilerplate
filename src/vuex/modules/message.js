import * as types from 'src/vuex/types'

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
