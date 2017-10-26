<template>
  <div class="view-login">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
           <div class="panel panel-default panel-login">
            <div class="panel-heading">
              <h4 class="panel-title">Login</h4>
            </div>
            <div class="panel-body">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      account: {}
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll()
      if (this.errors.any()) return
      this.callLogin(this.account)
      .then(() => {
        return this.getAccount({id: 'me'})
      })
      .then((response) => {
        this.$router.push(this.$route.query.redirect || '/')
      })
      .catch(() => {})
    }
  }
}
</script>

<style>
.panel-login {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -150px;
  min-width: 300px;
}
</style>
