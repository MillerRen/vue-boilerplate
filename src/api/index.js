import Vue from 'vue'
import VueResource from 'vue-resource'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const API_ROOT = process.env.API_ROOT

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.root = API_ROOT
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
      Vue.toastr({
        message: response.statusText,
        type: 'danger'
      })
    }
    return response
  })
})

export const Account = Vue.resource('/users{/id}')

export const Auth = Vue.resource('/auth/local')
