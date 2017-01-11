// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'src/api'
import router from 'src/router'
import store from 'src/vuex'

import 'src/directives'
import 'src/validators'
import 'src/plugins'
import 'src/components'

import VuexRouterSync from 'vuex-router-sync'
VuexRouterSync.sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>'
})
