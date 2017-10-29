import Vue from 'vue'
import VueToasted from 'vue-toasted'
import Modal from './modal'

Vue.use(VueToasted, {
  position: 'top-center',
  duration: 3000
})

Vue.use(Modal, {})
