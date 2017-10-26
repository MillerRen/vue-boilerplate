// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import VuexRouterSync from 'vuex-router-sync'

import '@/directives'
import '@/validators'
import '@/plugins'
import '@/components'
import '@/filters'

import App from './App'

const Root = Vue.extend(App)

Vue.config.productionTip = false

VuexRouterSync.sync(store, router)

/* eslint-disable no-new */
new Root({
  el: 'app',
  router,
  store
})
