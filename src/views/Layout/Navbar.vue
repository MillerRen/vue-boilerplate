<template>
<div class="navbar navbar-default navbar-static-top">
  <div class="container">
    <div class="navbar-header">
    <router-link to="/" class="navbar-brand">
    <img src="../../assets/logo.png" alt="brand" class="img-responsive"> Vue-boilerplate
    </router-link>
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
              <a><i class="glyphicon glyphicon-user"></i> Profile</a>
            </router-link>
            <li class="divider"></li>
            <router-link tag="li" to="/logout" >
              <a><i class="glyphicon glyphicon-off"></i> Logout</a>
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
    this.isLoggedIn && this.getAccount({id: 'me'})
    .catch(() => {})
  }
}
</script>

<style>
.navbar-brand img {
  max-height: 100%;
  display: inline-block;
}
</style>