<template>
<div class="component-alert" v-if="show">
  <div class="alert alert-warning">{{message}}</div>
</div>
</template>

<script>
export default {
  props: {
    message: ''
  },
  computed: {
    show () {
      return !!this.message
    }
  }
}
</script>

<style>
.component-alert {
  position: fixed;
  top: 30px;
  left: 25%;
  width: 50%;
  z-index: 1050;
  text-align: center;
}
.component-alert > .alert {
  display: inline-block;
}
</style>