export default function (Vue) {
  Vue.component('Hello', (resolve) => {
    require(['src/components/Hello.vue'], resolve)
  })
}
