<template>
  <div class="view-login">
    <div class="row">
      <div class="container">
        <div class="col-md-4 col-md-offset-4">
          <login-form @close="onClose"></login-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginForm from './LoginForm'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    onClose () {
      this.$router.push(this.$route.query.redirect || '/')
    }
  }
}
</script
<style></style>