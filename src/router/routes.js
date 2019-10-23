import Empty from '@/views/Empty'

export default [
  {
    path: '/',
    component: () => import('@/views/Home')
  },
  {
    path: '*',
    component: Empty
  }
]
