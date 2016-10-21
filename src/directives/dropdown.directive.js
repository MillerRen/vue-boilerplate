import Vue from 'vue'
import {toggle} from './dom-classes'

Vue.directive('dropdown', {
  bind (el, binding, vnode) {
    el.addEventListener('click', () => {
      toggle(el, 'open')
    })
  }
})
