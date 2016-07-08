<template>
  <div class="view-home">
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from 'src/views/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data () {
    return {
    }
  }
}
</script>

<style>
body {
  background-size: cover;
  background-image: url(../assets/background.jpg)
}
</style>
