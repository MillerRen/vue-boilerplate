import Vue from 'vue'

const API_ROOT = process.env.API_ROOT

export const Account = Vue.resource(API_ROOT + '/users{/id}')

export const Auth = Vue.resource('/auth/local')
