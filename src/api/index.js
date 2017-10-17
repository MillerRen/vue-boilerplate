import Vue from 'vue'
import VueResource from 'vue-resource'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueResource)

const API_ROOT = process.env.API_ROOT

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
// Vue.http.options.emulateJSON = true

Vue.http.interceptor.before = function (request, next) {
  NProgress.start()
  next()
}

Vue.http.headers.common['Authorization'] = localStorage.getItem('token') ? 'Bearer ' + localStorage.getItem('token') : ''

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    NProgress.done()
    if (response.status === 401) {
      localStorage.removeItem('token')
    }
    return response
  })
})

// mock data
if (process.env.NODE_ENV !== 'production') {
  // require('./mock-data')
}

export const Message = Vue.resource(API_ROOT + '/messages{/id}')

export const Account = Vue.resource(API_ROOT + '/users{/id}')

export const Auth = Vue.resource('/auth/local')

