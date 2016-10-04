<template>
  <div class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a v-link="{path: '/'}" class="navbar-brand">首页</a>
      </div>
      <div class="collapse  navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a v-link="{path: '/login'}">登录</a></li>
          <li><a v-link="{path: '/register'}">注册</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
