<template>
<div class="modal-content">
	<div class="modal-header">登录</div>
	<div class="modal-body">
		<LoginForm></LoginForm>
	</div>
</div>
</template>

<script>
import LoginForm from 'views/Account/LoginForm.vue'

export default {
  components: {
    LoginForm
  }
}
</script>

<style></style>