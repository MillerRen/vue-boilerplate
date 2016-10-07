// don't import anything, make sure it's just config
const routes = [
  {
    path: '/',
    components: {
      default: resolve => require(['views/Home'], resolve),
      header: resolve => require(['views/Layout/Navbar.vue'], resolve),
      footer: resolve => require(['views/Layout/Footer.vue'], resolve)
    }
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
