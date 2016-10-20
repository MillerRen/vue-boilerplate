// don't import anything, make sure it's just config
const routes = [
  {
    path: '/',
    component: resolve => require(['views/Home'], resolve)
  },
  {
    path: '/profile',
    auth: true,
    meta: {
      requiresAuth: true
    },
    component: resolve => require(['views/Account/Profile.vue'], resolve)
  },
  {
    path: '/login',
    component: resolve => require(['views/Account/Login.vue'], resolve)
  }
]

export default routes
