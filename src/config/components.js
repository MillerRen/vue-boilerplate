import Vue from 'vue'

Vue.component('Hello', resolve => require(['components/Hello.vue'], resolve))
