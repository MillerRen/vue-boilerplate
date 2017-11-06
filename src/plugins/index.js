import Vue from 'vue'
import VueToasted from 'vue-toasted'
import VuejsDialog from 'vuejs-dialog'
import VueModal from '@/plugins/modal'

Vue.use(VueToasted, {
  position: 'top-center',
  duration: 3000
})

Vue.use(VuejsDialog)

Vue.use(VueModal)
