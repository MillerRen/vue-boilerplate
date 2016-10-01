export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component (resolve) {
        require(['src/views/Home.vue'], resolve)
      }
    },
    '/hello': {
      name: 'hello',
      component (resolve) {
        require(['src/components/Hello.vue'], resolve)
      }
    }
  })
// router.beforeEach((transition)=>{
//   transition.next()
// })
}
