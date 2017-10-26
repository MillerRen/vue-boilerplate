import Vue from 'vue'

// global components
Vue.component('Modal', require('@/components/Modal'))

// async components
Vue.component('Uploader', resolve => require(['@/components/Uploader'], resolve))
