<template>
<div class="navbar navbar-default navbar-static-top">
  <div class="container">
    <div class="navbar-header">
    <a href="" class="navbar-brand">
    <img src="../../assets/logo.png" alt="brand" class="img-responsive"> Vue-boilerplate
    </a>
    </div>
    <div class="navbar-collapse">
      <ul v-if="!isLoggedIn" class="nav navbar-nav navbar-right">
        <router-link tag="li" to="/login">
          <a>Login</a>		
        </router-link>
      </ul>
      <ul v-if="isLoggedIn" class="nav navbar-nav navbar-right">
        <li class="dropdown" v-dropdown>
          <a href="javascript:void(0)" class="dropdown-toggle">{{me.name}}</a>
          <ul class="dropdown-menu">
            <router-link tag="li" to="/profile">
              <a>Profile</a>
            </router-link>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters({
    me: 'me',
    isLoggedIn: 'loggedIn'
  }),
  methods: mapActions({
    getAccount: 'getAccount'
  }),
  created () {
    this.getAccount({id: 'me'})
  }
}
</script>

<style>
.navbar-brand img {
  max-height: 100%;
  display: inline-block;
}
</style>