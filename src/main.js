// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VuexRouterSync from 'vuex-router-sync'
import VueAuth from 'vue-auth'

import router from './router'
import store from 'src/vuex'

import 'src/config/components'

import App from './App'

Vue.use(VueAuth)

VuexRouterSync.sync(store, router)

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  router,
  store
}, App))
.$mount('app')
