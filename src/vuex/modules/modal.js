import * as types from 'src/vuex/types'

const state = {
  view: '',
  data: {}
}

const mutations = {
  [types.OPEN_DIALOG] (sate, view, data) {
    state.view = view
    state.data = data
  },
  [types.CLOSE_DIALOG] (sate, view, data) {
    state.view = ''
    state.data = {}
  }
}

export default {
  state,
  mutations
}
