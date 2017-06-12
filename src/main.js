// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from 'src/router'
import store from 'src/store'
import VuexRouterSync from 'vuex-router-sync'
import 'src/directives'
import 'src/validators'
import 'src/plugins'
import 'src/components'

VuexRouterSync.sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: 'router-view',
  router,
  store
})
