import Vue from 'vue'
import Modal from '@/components/Modal'

const ModalConstructor = Vue.extend(Modal)

function modal (opts) {
  var instance = new ModalConstructor({
    propsData: opts
  })
  if (opts.component) {
    instance.$options.components[opts.name] = opts.component
  }
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
