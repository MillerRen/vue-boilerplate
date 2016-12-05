<template>
<form class="form form-login" @submit.prevent="login(account)">
  <div class="form-group" :class="{'has-error': errors.has('email')}">
    <label for="">email</label>
    <input type="text" name="email" class="form-control" placeholder="email" v-model="account.email" v-validate data-vv-rules="required|email" />
    <p class="help-block">{{errors.first('email')}}</p>
  </div>
  <div class="form-group" :class="{'has-error': errors.has('password')}">
    <label for="">password</label>
    <input type="password" class="form-control" name="password" placeholder="password" v-model="account.password" v-validate data-vv-rules="required" />
    <p class="help-block">{{errors.first('password')}}</p>
  </div>
  <div class="form-group">
    <button type="submit" class="btn btn-primary btn-block">login</button>
  </div>
</form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      account: {}
    }
  },
  methods: {
    login () {
      this.$validator.validateAll()
      if (this.errors.any()) return
      this.callLogin(this.account)
      .then(() => {
        return this.getAccount({id: 'me'})
      })
      .then((response) => {
        this.$emit('auth-success')
      })
      .catch(() => {})
    },
    ...mapActions({
      'callLogin': 'login',
      'getAccount': 'getAccount'
    })
  }
}
</script>

<style></style>