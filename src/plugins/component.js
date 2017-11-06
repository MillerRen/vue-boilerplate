// register or get a local component
import Vue from 'vue'

export default {
  install () {
    Vue.prototype.$component = function (name, component) {
      if (component) {
        this.$options.components[name] = component
      }
      return this.$options.components[name]
    }
  }
}
