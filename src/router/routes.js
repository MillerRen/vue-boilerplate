import Empty from '@/views/Empty'
import Navbar from '@/components/Navbar'

export default [
  {
    path: '/',
    components: {
      header: Navbar,
      default: () => import('@/views/Home')
    }
  },
  {
    path: '/login',
    component: resolve => require(['@/views/Auth/Login.vue'], resolve)
  },
  {
    path: '*',
    component: Empty
  }
]
