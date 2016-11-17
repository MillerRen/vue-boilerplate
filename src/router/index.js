import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: '/vue-boilerplate/',
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) return next()
  if (localStorage.token) return next()
  next({
    path: '/login',
    query: { redirect: to.fullPath }
  })
})

export default router
