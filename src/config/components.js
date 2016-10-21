import Vue from 'vue'

Vue.component('Hello', resolve => require(['components/Hello.vue'], resolve))
Vue.component('Dropdown', resolve => require(['components/Dropdown.vue'], resolve))
Vue.component('Navbar', resolve => require(['views/Layout/Navbar.vue'], resolve))
Vue.component('Foot', resolve => require(['views/Layout/Footer.vue'], resolve))
