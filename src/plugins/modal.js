import Vue from 'vue'
import Component from '@/components/Modal'

const Modal = Vue.extend(Component)

function modal (opts) {
  var instance = new Modal({
    propsData: {
      name: opts.name
    }
  })
  instance.$options.components[opts.name] = opts
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}

function install (opts) {
  Vue.prototype.$modal = modal
  Vue.modal = modal
}

export default {
  install
}
