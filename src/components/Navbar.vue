<template>
<nav class="component-navbar navbar navbar-default navbar-static-top">
  <div class="container">
    <div class="navbar-header">
    <router-link to="/" class="navbar-brand">
    <img src="../assets/logo.png" alt="brand" class="img-responsive"> Vue-boilerplate
    </router-link>
    <button type="button" class="navbar-toggle collapsed" @click="collapsed=!collapsed" v-clickaway="clickaway">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    </div>
    <div class="navbar-collapse" :class="{collapse: collapsed}">
      <p class="navbar-text navbar-right github-link"><a href="https://github.com/MillerRen/vue-boilerplate"><img src="../assets/github.svg" alt=""></a></p>
      <ul v-if="!me" class="nav navbar-nav navbar-right">
        <li>
          <a @click="loginModal">Login</a>
        </li>
      </ul>
      <ul v-if="me" class="nav navbar-nav navbar-right">
        <li class="dropdown" v-dropdown>
          <a href="javascript:void(0)" class="dropdown-toggle">{{me.name||'anonymous'}}</a>
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
</nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Navbar',
  data () {
    return {
      collapsed: true
    }
  },
  computed: mapGetters({
    'me': 'account'
  }),
  methods: {
    loginModal () {
      var vm = this
      var modal = this.$modal({
        title: 'Login',
        name: 'login-form',
        props: {
          onSubmit (data) {
            vm.login(data)
              .then(() => {
                modal.close()
              })
              .catch(() => {})
          }
        }
      })
    },
    clickaway () {
      this.collapsed = true
    },
    ...mapActions({
      'login': 'login'
    })
  }
}
</script>

<style>
.navbar-brand > img {
  max-height: 100%;
  display: inline-block;
}
.navbar .github-link img{
  height: 18px;
  width: 18px;
}
</style>
