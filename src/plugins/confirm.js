import Vue from 'vue'
import Confirm from '@/components/Confirm'

function confirm (opts) {
  return Vue.modal(Confirm, opts)
}

export default {
  install () {
    Vue.confirm = confirm
    Vue.prototype.$confirm = confirm
  }
}
