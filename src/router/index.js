import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: '/vue-boilerplate/',
  routes: [
    {
      path: '/app',
      alias: '/',
      component: resolve => require(['src/App'], resolve),
      children: routes
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) return next()
  if (!localStorage.token) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }

  Vue.http.get('/users/me')
  .then((response) => {
    next(vm => {
      vm.user = response.body
    })
  })
  .catch((response) => {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  })
})

Vue.router = router

export default router
