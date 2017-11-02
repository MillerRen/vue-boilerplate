import Vue from 'vue'

const API_ROOT = '/api'

Vue.http.defaults.BASE_URL = API_ROOT
Vue.http.defaults.headers.common['Authorization'] = `Bear ${localStorage.token}`

// mock data
if (process.env.NODE_ENV !== 'production') {
  // require('./mock-data')
}

export const Account = Vue.http.create()

export const Auth = Vue.http.create()
