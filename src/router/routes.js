import account from './account'

const routes = [
  {
    path: '/',
    component: resolve => require(['src/App.vue'], resolve),
    children: account
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
