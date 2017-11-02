import Vue from 'vue'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

axios.interceptors.request.use(function (request) {
  NProgress.start()
  return request
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  NProgress.done()
  return response
}, function (error) {
  NProgress.done()
  // if (401 === error.response.status) {
  //  localStorage.removeItem('token')
  // }
  Vue.toasted.error(error.message)
  return Promise.reject(error)
})

export default {
  install () {
    Vue.http = axios
    Vue.prototype.$http = axios
  }
}
