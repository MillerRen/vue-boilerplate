import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import configComponent from './dynamic'
import configRouter from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import App from './App'

Vue.use(VueRouter)

Vue.config.warnExpressionErrors = false

configComponent(Vue)

const router = new VueRouter({
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true
})
configRouter(router)
sync(store, router)

router.redirect({
  '*': '/home'
})

router.start(Vue.extend(App), 'app')
