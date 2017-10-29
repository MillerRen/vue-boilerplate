import Vue from 'vue'

// async components
Vue.component('Uploader', resolve => require(['@/components/Uploader'], resolve))
