import Vue from 'vue'

Vue.component('Uploader', resolve => require(['components/Uploader'], resolve))
Vue.component('Hello', resolve => require(['components/Async/Hello.vue'], resolve))
