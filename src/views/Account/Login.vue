<template>
  <div class="view-login">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
           <div class="panel panel-default">
            <div class="panel-body">
              <LoginForm @auth-success="onAuthSuccess"></LoginForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from 'views/Account/LoginForm.vue'

export default {
  components: {
    LoginForm
  },
  methods: {
    onAuthSuccess () {
      this.$router.push(this.$route.query.redirect || '/')
    }
  }
}
</script>

<style></style>