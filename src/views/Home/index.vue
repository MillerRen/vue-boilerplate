<template>
<div class="view-home">
  <jumbotron></jumbotron>
</div>
</template>

<script>
export default {
  components: {
    Jumbotron: require('views/Home/Jumbotron')
  },
  mounted () {
    this.$root.toast('hello world')
  }
}
</script>

<style>
.view-home .jumbotron {
  position: relative;
  top:  -20px;
}
</style>