const routes = [
  {
    path: '',
    component: resolve => require(['views/Home'], resolve)
  },
  {
    path: '/profile',
    meta: {
      requiresAuth: true
    },
    component: resolve => require(['views/Account/Profile.vue'], resolve)
  },
  {
    path: '/login',
    component: resolve => require(['views/Account/Login.vue'], resolve)
  },
  { path: '/logout',
    component: resolve => require(['views/Account/Logout.vue'], resolve)
  }
]

export default routes
