import Vue from 'vue'

Vue.component('Hello', resolve => require(['components/Async/Hello.vue'], resolve))
