import Vue from 'vue'
import VueToasted from 'vue-toasted'
import Modal from './modal'
import Confirm from './confirm'
import Http from './http'

Vue.use(VueToasted, {
  position: 'top-center',
  duration: 3000
})

Vue.use(Modal, {})
Vue.use(Confirm, {})

Vue.use(Http, {})
