import Vue from 'vue'

const API_ROOT = process.env.API_ROOT

// mock data
if (process.env.NODE_ENV !== 'production') {
  require('./mock-data')
}

export const Message = Vue.resource(API_ROOT + '/messages{/id}')

export const Account = Vue.resource(API_ROOT + '/users{/id}')

export const Auth = Vue.resource('/auth/local')
