import Vue from 'vue'
import Modal from '@/components/Modal'

Vue.component('modal', Modal)

function install (opts) {
  Vue.prototype.$modal = function (opts) {
    return this.$root.modal(opts)
  }
}

export default {
  install
}
