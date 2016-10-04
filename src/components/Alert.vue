<template>
  <div class="vue-alert">
    <div class="alert-text alert alert-warning">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vue-alert {
  position: fixed;
  top: 60px;
  width: 100%;
  text-align: center;
}

.vue-alert .alert-text {
  display: inline-block;
}
</style>
