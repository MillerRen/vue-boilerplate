import * as types from 'src/vuex/types'

const state = {
  view: '',
  data: {}
}

const mutations = {
  [types.OPEN_MODAL] (sate, view, data) {
    state.view = view
    state.data = data
  }
}

export default {
  state,
  mutations
}
