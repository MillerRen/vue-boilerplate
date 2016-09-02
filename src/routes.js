import Home from 'src/views/Home.vue'

export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: Home
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
