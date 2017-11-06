import Vue from 'vue'
import VueToasted from 'vue-toasted'
import VuejsDialog from 'vuejs-dialog'
import VueModal from '@/plugins/modal'
import VueComponent from './component'

Vue.use(VueToasted, {
  position: 'top-center',
  duration: 3000
})

Vue.use(VuejsDialog)

Vue.use(VueComponent)

Vue.use(VueModal)
