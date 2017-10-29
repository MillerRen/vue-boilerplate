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
    path: '*',
    component: Empty
  }
]
