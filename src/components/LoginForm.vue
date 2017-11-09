<template>
  <form class="form view-login-form" @submit.prevent="submit(account)">
    <div class="form-group" :class="{'has-error': $v.account.email.$error}">
      <label for="">email</label>
      <input type="text" name="email" class="form-control" placeholder="email" v-model="account.email" @input="$v.account.email.$touch()" />
      <p class="help-block" v-if="$v.account.email.$dirty&&!$v.account.email.required">Field is required</p>
      <p class="help-block" v-if="!$v.account.email.email">Invalid email</p>
    </div>
    <div class="form-group" :class="{'has-error': $v.account.password.$error}">
      <label for="">password</label>
      <input type="password" class="form-control" name="password" placeholder="password" v-model="account.password" @input="$v.account.password.$touch()" />
      <p class="help-block" v-if="$v.account.password.$dirty&&!$v.account.password.required">Field is required</p>
      <p class="help-block" v-if="$v.account.password.$dirty&&!$v.account.password.minLength">Field must have at least {{ $v.account.password.$params.minLength.min }} characters.</p>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-block">login</button>
    </div>
  </form>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'LoginForm',
  props: {
    onSubmit: {
      type: Function,
      default () {
        return () => {}
      }
    }
  },
  data () {
    return {
      account: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) return
      this.onSubmit(this.account)
    }
  },
  validations: {
    account: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  }
}
</script>

<style>
</style>
