// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import VuexRouterSync from 'vuex-router-sync'
import App from './App'

import '@/plugins'
import '@/validators'
import '@/directives'
import '@/filters'
import '@/mixins'
import '@/locales'
import '@/components'

Vue.config.productionTip = false

VuexRouterSync.sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: 'app',
  router,
  store,
  ...App
})
