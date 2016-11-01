// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VuexRouterSync from 'vuex-router-sync'

import App from './App'

import 'src/components/global'
import 'src/components/async'
import 'src/directives'
import 'src/validators'

import router from './router'
import store from 'src/vuex'

VuexRouterSync.sync(store, router)

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  router,
  store
}, App))
.$mount('app')
