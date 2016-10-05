// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VuexRouterSync from 'vuex-router-sync'

import router from './router'
import store from 'src/vuex'

import App from './App'

VuexRouterSync.sync(store, router)

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  router,
  store
}, App))
.$mount('app')
