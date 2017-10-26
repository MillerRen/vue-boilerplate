<template>
<div class="view-home">
  <jumbotron></jumbotron>
</div>
</template>

<script>
import Jumbotron from '@/views/Home/Jumbotron'

export default {
  components: {
    Jumbotron
  }
}
</script>

<style>
.view-home .jumbotron {
  position: relative;
  top:  -20px;
}
</style>
