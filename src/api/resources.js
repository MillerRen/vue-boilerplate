import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.emulateJSON = true

Vue.http.interceptors.push({
  request(request) {
    request.headers = request.headers || {}
    return request
  },
  response(response) {
    return response
  }
})

export const Message = Vue.resource('/api/messages{/id}')
