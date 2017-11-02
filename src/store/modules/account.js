
const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
const GET_ACCOUNT_FAIL = 'GET_ACCOUNT_FAIL'

const state = {
  account: null
}

const getters = {
  account (state) {
    return state.account
  }
}

const mutations = {
  [GET_ACCOUNT_SUCCESS] (state, account) {
    state.account = account
  },
  [GET_ACCOUNT_FAIL] (state, err) {
    state.account = {}
  }
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
