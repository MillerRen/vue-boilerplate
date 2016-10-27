import Vue from 'vue'
import VueResource from 'vue-resource'

const API_ROOT = process.env.API_ROOT

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next) => {
  const token = 'Bearer ' + window.localStorage.getItem('token') || ''
  request.headers = request.headers || {}
  request.headers.set('Authorization', token)
  next((response) => {
    return response
  })
})

// mock data
if (process.env.NODE_ENV !== 'production') {
  require('./mock-data')
}

export const Message = Vue.resource(API_ROOT + '/messages{/id}')

export const Account = Vue.resource(API_ROOT + '/accounts{/id}')

export const Auth = Vue.resource(API_ROOT + '/auth', {}, {
  login: {
    method: 'post',
    url: '/auth/local'
  }
})
