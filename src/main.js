// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueToasted from 'vue-toasted'
import VuejsDialog from 'vuejs-dialog'
import {directive as Clickaway} from 'vue-clickaway'
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'
import Modal from '@/components/Modal'
import router from '@/router'
import store from '@/store'
import VuexRouterSync from 'vuex-router-sync'
import App from './App'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const Root = Vue.extend(App)

Vue.config.productionTip = false

Vue.directive('clickaway', Clickaway)

Vue.use(VueToasted, {
  position: 'top-center',
  duration: 3000
})
Vue.use(VuejsDialog)
Vue.component('modal', Modal)

Validator.addLocale(zh)
Vue.use(VeeValidate, {
  locale: 'zh_CN'
})

// vue-resouorce config
Vue.use(VueResource)
Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
// Vue.http.options.emulateJSON = true
Vue.http.options.progress = function (event) {
  if (event.lengthComputable) {
    NProgress.set(event.loaded / event.total)
  }
}
Vue.http.interceptors.push((request, next) => {
  NProgress.start()
  request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  next((response) => {
    NProgress.done()
    if (response.status >= 400) {
      Vue.toasted.error(response.statusText)
    }
    return response
  })
})

// router vuex config
VuexRouterSync.sync(store, router)
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

/* eslint-disable no-new */
new Root({
  el: 'app',
  router,
  store
})
