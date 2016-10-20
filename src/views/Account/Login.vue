<template>
  <div class="view-login">
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
           <div class="panel panel-default">
            <div class="panel-body">
              <form class="form form-login" @submit.prevent="login(account)">
                <div class="form-group">
                  <label for="">name</label>
                  <input type="text" class="form-control" v-model="account.name" placeholder="name" />
                </div>
                <div class="form-group">
                  <label for="">password</label>
                  <input type="text" class="form-control" v-model="account.password" placeholder="password" />
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
  methods: mapActions({
    'login': 'login'
  })
}
</script>

<style></style>