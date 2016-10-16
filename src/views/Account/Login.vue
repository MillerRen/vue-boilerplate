<template>
  <div class="view-login">
    <form @submit.prevent="login()">
      <input type="text" v-model="account.name" placeholder="name" />
      <input type="text" v-model="account.password" placeholder="password" />
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      account: {}
    }
  },
  methods: mapActions({
    'login': 'login'
  })
}
</script>

<style></style>