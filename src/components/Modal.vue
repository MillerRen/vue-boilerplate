<template>
  <div class="modal">
    <div class="modal-backdrop fade in"></div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">header</div>
        <div class="modal-body">body</div>
        <div class="modal-footer">footer</div>
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
