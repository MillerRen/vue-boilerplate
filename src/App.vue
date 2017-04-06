<template>
  <div id="app" class="app">
    <Navbar></Navbar>
    <transition name="router" mode="out-in">
      <router-view class="view router-view"></router-view>
    </transition>
    <Foot></Foot>
    <Toast :message="message"></Toast>
    <Modal :modalView="modalView"></Modal>
  </div>
</template>

<script>
import Toast from 'src/components/Toast'
import Navbar from '@/components/Layout/Navbar'
import Foot from '@/components/Layout/Footer'

import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    Toast,
    Navbar,
    Foot
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

.router-view {
    transition: all .5s ease;
    min-height: 100vh;
  }

.router-enter, .router-leave {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}
</style>
