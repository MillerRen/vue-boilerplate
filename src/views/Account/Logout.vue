<template>
  <div class="view-login">
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
           <div class="panel panel-default">
            <div class="panel-body">
              logout redirect later
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
    logout () {
      this.$root.$auth.setToken(undefined)
      this.$root.$auth.setUser(undefined)
      this.callLogout()
    },
    ...mapActions({
      'callLogout': 'logout'
    })
  }
}
</script>

<style></style>