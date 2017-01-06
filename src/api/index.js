import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
// Vue.http.options.emulateJSON = true

Vue.http.headers.common['Authorization'] = localStorage.getItem('token') ? 'Bearer ' + localStorage.getItem('token') : ''

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (response.status === 401) {
      localStorage.removeItem('token')
    }
    return response
  })
})
