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
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
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
      path: '/auth/local',
      query: { redirect: to.fullPath }
    })
  }
  next()
})

export default router
