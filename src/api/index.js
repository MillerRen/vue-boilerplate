import Vue from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'

const API_ROOT = '/api'

axios.defaults.BASE_URL = API_ROOT

axios.interceptors.request.use(function (request) {
  NProgress.start()
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function () {
  NProgress.done()
}, function (error) {
  Vue.toasted.e(error)
  return Promise.reject(error)
})

Vue.http = axios
Vue.prototype.$http = axios

// mock data
if (process.env.NODE_ENV !== 'production') {
  // require('./mock-data')
}

export default axios
