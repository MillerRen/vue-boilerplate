import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from 'src/config/constants'

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

export const Account = Vue.resource(API_ROOT + '/account')
