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
  }
}
</script>

<style>

</style>
