<template>
<div class="view-home">
  <div class="jumbotron">
    <div class="container text-center">
      <img src="../../assets/awesome-vue.png">
      <hello class="text-center"></hello>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters({
    me: 'me'
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
.view-home .jumbotron {
  position: relative;
  top:  -20px;
}
</style>