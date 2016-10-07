<template>
<div class="view-home">
home<hello></hello>
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

</style>