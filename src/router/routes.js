const routes = [
  {
    path: '/',
    components: {
      default: resolve => require(['views/Home'], resolve),
      header: resolve => require(['views/Layout/Navbar.vue'], resolve),
      footer: resolve => require(['views/Layout/Footer.vue'], resolve)
    }
  }
]

export default routes
