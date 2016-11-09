import Vue from 'vue'
import {directive as Clickaway} from 'vue-clickaway'

// global directive register
Vue.directive('clickaway', Clickaway)
Vue.directive('dropdown', require('./dropdown').default)
