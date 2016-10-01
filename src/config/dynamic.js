export default function (Vue) {
  Vue.component('Navbar', (resolve) => {
    require(['src/components/Navbar.vue'], resolve)
  })

  Vue.component('Alert', (resolve) => {
    require(['src/components/Alert.vue'], resolve)
  })

  Vue.component('Modal', (resolve) => {
    require(['src/components/Modal.vue'], resolve)
  })
}
