export const me = (state) => {
  return state.account.account
}

export const loggedIn = (state) => {
  return !!state.auth.token
}
