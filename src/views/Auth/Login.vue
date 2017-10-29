<template>
  <div class="view-login modal-content">
      <div class="modal-header">
        
        <h4 class="panel-title">Login</h4>
      </div>
      <div class="modal-body">
        <form class="form form-login" @submit.prevent="submit(account)">
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
      </div>
      <div class="modal-footer"></div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      account: {}
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    submit () {
      this.$validator.validateAll()
      if (this.errors.any()) return
      this.login(this.account)
      .then(() => {
        return this.getAccount({id: 'me'})
      })
      .then((response) => {
        this.$router.push(this.$route.query.redirect || '/')
      })
      .catch(() => {})
    },
    ...mapActions({
      'login': 'login'
    })
  }
}
</script>

<style>
.panel-login {
}
</style>
