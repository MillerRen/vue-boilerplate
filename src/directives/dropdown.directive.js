import Vue from 'vue'
import {toggle} from 'src/utils/dom-classes'

Vue.directive('dropdown', {
  bind (el, binding, vnode) {
    el.addEventListener('click', () => {
      toggle(el, 'open')
    })
  }
})
