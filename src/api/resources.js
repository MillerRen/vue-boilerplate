import Vue from 'vue'
import VueResource from 'vue-resource'

const API_ROOT = process.env.API_ROOT

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next) => {
  request.headers = request.headers || {}
  next((response) => {
    return response
  })
})

export const Message = Vue.resource(API_ROOT + '/messages{/id}')

export const Account = Vue.resource(API_ROOT + '/accounts{/id}')
