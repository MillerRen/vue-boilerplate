import Vue from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'

Vue.http = axios
Vue.prototype.$http = axios

const API_ROOT = '/api'

axios.defaults.BASE_URL = API_ROOT
axios.defaults.headers.common['Authorization'] = `Bear ${localStorage.token}`

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
  Vue.toasted.error(error.message)
  return Promise.reject(error)
})

// mock data
if (process.env.NODE_ENV !== 'production') {
  // require('./mock-data')
}

export const Account = axios.create()

export const Auth = axios.create()
