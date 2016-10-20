<template>
  <div id="app" class="app">
    <router-view name="header"></router-view>
    <router-view class="view"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
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

.app {
  min-height: 100%;
}
</style>
