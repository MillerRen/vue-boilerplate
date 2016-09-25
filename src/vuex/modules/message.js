import * as types from '../types'

const state = {
  message: ''
}

const mutations = {
  [types.UPDATE_MESSAGE] (state, message) {
    state.message = message
  }
}

export default {
  state: state,
  mutations: mutations
}
