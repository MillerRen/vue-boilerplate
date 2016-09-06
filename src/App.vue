<template>
    <router-view></router-view>
    <alert :show.sync="true" type="warning" placement="top" width="40%" dismissable="true">
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
      message: 'hello'
    }
  }
}
</script>

<style>

</style>
