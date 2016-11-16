export const message = (state) => {
  return state.message.message
}

export const me = (state) => {
  return state.account.account
}

export const loggedIn = (state) => {
  return !!state.auth.token
}
