<template>
  <div class="view-login">
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
           <div class="panel panel-default">
            <div class="panel-body">
              <form class="form form-login" @submit.prevent="login(account)">
                <div class="form-group" :class="{'has-error': errors.has('email')}">
                  <label for="">name</label>
                  <input type="text" name="email" class="form-control" placeholder="name" v-model="account.name" v-validate data-rules="required|email" />
                  <p class="help-block">{{errors.first('email')}}</p>
                </div>
                <div class="form-group" :class="{'has-error': errors.has('password')}">
                  <label for="">password</label>
                  <input type="password" class="form-control" name="password" placeholder="password" v-model="account.password" v-validate data-rules="required" />
                  <p class="help-block">{{errors.first('password')}}</p>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <foot></foot>
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
  methods: {
    login () {
      this.$validator.validateAll()
      if (this.errors.any()) return
      this.callLogin()
      .then((response) => {
        return this.getAccount({id: 'me'})
      })
      .catch((response) => {
        console.log('login fail', response)
      })
    },
    ...mapActions({
      'callLogin': 'login',
      'getAccount': 'getAccount'
    })
  }
}
</script>

<style></style>