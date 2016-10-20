<template>
<div class="navbar navbar-default navbar-static-top">
  <div class="container">
    <div class="navbar-header">
    <a href="" class="navbar-brand">
    <img src="../../assets/logo.png" alt="brand" class="img-responsive"> Vue-boilerplate
    </a>
    </div>
    <div class="navbar-collapse">
      <ul class="nav navbar-nav navbar-right">
        <router-link tag="li" to="/login">
          <a>Login</a>		
        </router-link>
      </ul>
    </div>
  </div>
</div>
</template>

<script></script>

<style>
.navbar-brand img {
  max-height: 100%;
  display: inline-block;
}
</style>