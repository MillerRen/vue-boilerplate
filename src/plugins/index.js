import Vue from 'vue'
import VueToasted from 'vue-toasted'
import VuejsDialog from 'vuejs-dialog'
import VueModal from '@/plugins/modal'
import VueComponent from './component'
import VueToastr from '@/plugins/toastr'

Vue.use(VueToasted, {
  position: 'top-center',
  duration: 300000
})

Vue.use(VuejsDialog)

Vue.use(VueComponent)

Vue.use(VueModal)

Vue.use(VueToastr)
