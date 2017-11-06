<template>
  <div id="app" class="app">
    <router-view name="header"></router-view>
    <transition name="router" mode="out-in">
      <router-view class="view router-view"></router-view>
    </transition>
    <router-view name="footer"></router-view>
    <modal ref="modal" v-bind="opts"></modal>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      opts: {}
    }
  },
  methods: {
    modal (opts) {
      this.opts = opts
      return this.$refs.modal
    }
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
