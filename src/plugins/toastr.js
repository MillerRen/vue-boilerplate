import Vue from 'vue'
import Toastr from '@/components/Toastr'

const Ctor = Vue.extend(Toastr)

function toastr (opts) {
  var instance = new Ctor({
    propsData: opts
  }).$mount()
  document.body.appendChild(instance.$el)
  return instance
}

export default {
  install () {
    Vue.toastr = toastr
    Vue.prototype.$toastr = toastr
  }
}
