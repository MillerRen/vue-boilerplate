<template>
    <router-view></router-view>
    <alert :show.sync="message!==''" type="warning" placement="top" width="40%" dismissable="true" duration="3000">
      {{message}}
    </alert>
</template>

<script>
import {alert} from 'vue-strap'

export default {
  components: {
    alert
  },
  data: () => {
    return {
      message: ''
    }
  },
  methods: {
    toast (message) {
      this.message = message
    }
  }
}
</script>

<style>

</style>
