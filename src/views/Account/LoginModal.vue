<template>
<div class="modal-content">
  <div class="modal-header">登录</div>
  <div class="modal-body">
    <LoginForm @auth-success="onAuthSuccess"></LoginForm>
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
      this.$root.closeModal()
    }
  }
}
</script>

<style></style>