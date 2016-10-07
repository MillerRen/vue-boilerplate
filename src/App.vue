<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  components: {
  },
  methods: {
    loggedIn () {
      return false
    }
  },
  created () {
    console.log(this)
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
