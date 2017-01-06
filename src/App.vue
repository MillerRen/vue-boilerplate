<template>
  <div id="app" class="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
    <Toast :message="message"></Toast>
    <Modal :modalView="modalView"></Modal>
  </div>
</template>

<script>
import Toast from 'src/components/Toast'

import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    Toast
  },
  computed: {
    ...mapGetters({
      message: 'message',
      modalView: 'modalView'
    })
  },
  methods: {
    test () {},
    ...mapActions({
      toast: 'toast',
      dialog: 'dialog'
    })
  },
  mounted () {
    console.log('mounted')
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
