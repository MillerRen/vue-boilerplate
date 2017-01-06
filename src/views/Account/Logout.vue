<template>
  <div class="view-logout">
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
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods: mapActions({
    'logout': 'logout'
  }),
  mounted () {
    this.logout()
    .then(() => {
      this.$router.push('login')
    })
  }
}
</script>

<style></style>