import Vue from 'vue'

// global components
Vue.component('Modal', require('components/Modal'))
Vue.component('LoginModal', require('views/Account/LoginModal.vue'))

// async components
Vue.component('Uploader', resolve => require(['components/Uploader'], resolve))
