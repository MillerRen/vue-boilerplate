import Vue from 'vue'
import Modal from '@/components/Modal'

const ModalConstructor = Vue.extend(Modal)

function modal (Component, opts) {
  opts.name = Component.name
  var instance = new ModalConstructor({
    propsData: opts
  })
  instance.$options.components[opts.name] = Component
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
