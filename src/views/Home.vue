<template>
  <div id="home">
    <navbar>
      <a href="/" slot="brand" class="navbar-brand">Home</a>
    </navbar>
  </div>
</template>

<script>
import {navbar} from 'vue-strap'

export default {
  data: () => {
    return {
      showModal: true
    }
  },
  components: {
    navbar
  },
  ready () {
    this.$root.toast('hello')
    this.$root.confirm('are you sure?')
  }
}
</script>

<style>

</style>
