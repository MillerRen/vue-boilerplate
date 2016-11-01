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
    <Footer></Footer>
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
      this.callLogout()
    },
    ...mapActions({
      'callLogout': 'logout'
    })
  }
}
</script>

<style></style>