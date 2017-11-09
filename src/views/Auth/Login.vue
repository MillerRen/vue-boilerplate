<template>
  <div class="view-login">
    <div class="row">
      <div class="container">
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default panel-login">
            <div class="panel-heading">Login</div>
            <div class="panel-body">
              <login-form :onSubmit="onSubmit"></login-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import LoginForm from '@/components/LoginForm'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    onSubmit (data) {
      this.login(data)
        .then(() => {
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
  margin-top: 10%;
}
</style>