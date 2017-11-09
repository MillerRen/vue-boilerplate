<template>
  <form class="form view-login-form" @submit.prevent="submit(account)">
    <form-group :field="$v.account.email" label="email" name="email">
      <input type="text" name="email" class="form-control" placeholder="email" v-model="account.email" @input="$v.account.email.$touch()" />
    </form-group>
    <form-group :field="$v.account.password" label="password" name="password">
      <input type="password" class="form-control" name="password" placeholder="password" v-model="account.password" @input="$v.account.password.$touch()" />
    </form-group>
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
