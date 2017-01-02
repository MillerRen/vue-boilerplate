// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from 'src/vuex'
import VuexRouterSync from 'vuex-router-sync'

VuexRouterSync.sync(store, router)

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
