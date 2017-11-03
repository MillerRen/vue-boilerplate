<template>
  <div id="app" class="app">
    <router-view name="header"></router-view>
    <transition name="router" mode="out-in">
      <router-view class="view router-view"></router-view>
    </transition>
    <router-view name="footer"></router-view>
    <modal title="Login">
      <login-form></login-form>
    </modal>
  </div>
</template>

<script>
import LoginForm from '@/views/Auth/LoginForm'

export default {
  name: 'App',
  components: {
    LoginForm
  },
  computed: {
  },
  methods: {
  },
  mounted () {
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
