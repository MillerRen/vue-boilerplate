import Vue from 'vue'
const r = require.context('./', true, /.vue$/, 'lazy')

r.keys().forEach(key => {
  const k = key.replace('./', '').replace('.vue', '')
  Vue.component(k, () => r(key))
})
