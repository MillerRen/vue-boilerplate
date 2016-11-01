<template>
<div class="footer">
  <div class="container text-center">
    <p class="text-muted">Vue-boilerplate@{{version}} powered by Vue</p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      version: process.env.VERSION
    }
  }
}
</script>

<style></style>