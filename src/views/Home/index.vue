<template>
<div class="view-home">
  <navbar></navbar>
  <jumbotron></jumbotron>
  <foot></foot>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    Jumbotron: require('views/Home/Jumbotron')
  },
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