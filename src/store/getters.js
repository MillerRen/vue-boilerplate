export const message = (state) => {
  return state.message.message
}

export const modalView = (state) => {
  return state.modal.view
}

export const me = (state) => {
  return state.account.account
}

export const loggedIn = (state) => {
  return !!state.auth.token
}
