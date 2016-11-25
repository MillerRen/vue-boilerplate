<template>
<footer class="component-footer footer">
  <div class="container text-center">
    <p class="text-muted">Vue-boilerplate@{{version}} powered by Vue</p>
  </div>
</footer>
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