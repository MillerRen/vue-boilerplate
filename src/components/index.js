import Vue from 'vue'

// global components
Vue.component('Modal', require('components/Modal'))
Vue.component('Navbar', require('components/Layout/Navbar.vue'))
Vue.component('Footer', require('components/Layout/Footer.vue'))
Vue.component('LoginModal', require('views/Account/LoginModal.vue'))

// async components
Vue.component('Uploader', resolve => require(['components/Uploader'], resolve))
Vue.component('Hello', resolve => require(['components/Async/Hello.vue'], resolve))
