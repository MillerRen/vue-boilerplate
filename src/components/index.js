import Vue from 'vue'

// global components
Vue.component('Modal', require('components/Modal'))
Vue.component('LoginModal', require('views/Account/LoginModal.vue'))

// async components
Vue.component('Navbar', resolve => require(['components/Layout/Navbar.vue'], resolve))
Vue.component('Footer', resolve => require(['components/Layout/Footer.vue'], resolve))
Vue.component('Uploader', resolve => require(['components/Uploader'], resolve))
Vue.component('Hello', resolve => require(['components/Async/Hello.vue'], resolve))
