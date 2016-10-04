<template>
  <div class="vue-alert" v-show="!!message.message">
    <div class="alert-text alert alert-warning">{{ message.message }}</div>
  </div>
</template>

<script>
import {message} from 'src/vuex/getters'

export default {
  vuex: {
    getters: {
      message
    }
  },
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
