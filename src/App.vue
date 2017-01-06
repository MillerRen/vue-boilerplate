<template>
  <div id="app" class="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
    <Toast :message="message"></Toast>
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
      message: 'message'
    })
  },
  methods: {
    test () {},
    ...mapActions({
      toast: 'toast'
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
