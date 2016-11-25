import account from './account'

import header from 'components/Layout/Navbar.vue'
import footer from 'components/Layout/Footer.vue'

const routes = [
  {
    path: '/',
    components: {
      header: header,
      footer: footer,
      default: resolve => require(['components/Layout/Main.vue'], resolve)
    },
    children: account
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
