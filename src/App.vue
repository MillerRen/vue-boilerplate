<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
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

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}
</style>
