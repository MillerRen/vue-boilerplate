<template>
  <div id="app" class="app">
    <!-- <router-view name="header"></router-view> -->
    <Navbar></Navbar>
    <transition name="router" mode="out-in">
    <router-view class="view router-view"></router-view>
    </transition>
    <Footer></Footer>
    <!-- <router-view name="footer"></router-view> -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import router from './router'
import store from 'src/vuex'
import VuexRouterSync from 'vuex-router-sync'

import 'src/components/global'
import 'src/components/async'
import 'src/directives'
import 'src/validators'

VuexRouterSync.sync(store, router)

export default {
  router,
  store,
  components: {
  },
  computed: mapGetters({
    isLoggedIn: 'loggedIn'
  }),
  methods: {
    loggedIn () {
      return this.isLoggedIn
    }
  },
  created () {
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
