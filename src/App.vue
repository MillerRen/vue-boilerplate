<template>
  <div id="app" class="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
    <Toast :message="message"></Toast>
    <Modal :modalView="modalView" :modalData="modalData" @close="closeModal"></Modal>
  </div>
</template>

<script>
import router from './router'
import store from 'src/vuex'
import VuexRouterSync from 'vuex-router-sync'

import 'src/components/global'
import 'src/components/async'
import 'src/directives'
import 'src/validators'

import Toast from 'src/components/Toast'

import {mapGetters, mapActions} from 'vuex'

VuexRouterSync.sync(store, router)

export default {
  router,
  store,
  components: {
    Toast
  },
  data () {
    return {
      modalView: '',
      modalData: {}
    }
  },
  computed: {
    ...mapGetters({
      message: 'message'
    })
  },
  methods: {
    closeModal (e, data) {
      this.modalView = ''
      this.modalData = {}
    },
    openModal (view, data) {
      this.modalView = view
      this.modalData = data
    },
    ...mapActions({
      toast: 'toast'
    })
  }
}
</script>

<style lang="less">
@import '~bootstrap/less/bootstrap.less';
@import './theme/default.less';
@import './router/transition.less';

html,
body {
  height: 100%;
}

.app {
  min-height: 100%;
}
</style>
