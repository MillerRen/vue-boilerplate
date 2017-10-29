import Vue from 'vue'
import Component from '@/components/Modal'

const Modal = Vue.extend(Component)

function modal (Component, opts) {
  var name = Component.name
  var instance = new Modal({
    propsData: {
      name: name,
      size: opts.size,
      backdrop: opts.backdrop
    }
  })
  instance.$options.components[name] = Component
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
