<template>
<div class="component-modal modal fade in">
  <div class="modal-backdrop fade in" v-if="backdrop" @click.self="close"></div>
  <div class="modal-dialog" :class="'modal-'+size">
    <component :is="name"></component>
  </div>
</div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    size: {
      type: String,
      default: 'md'
    },
    name: {
      type: String,
      default: ''
    },
    backdrop: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    close () {
      this.$destroy()
    }
  }
}
</script>

<style>
.component-modal {
  display: block;
}
.modal-backdrop {
  z-index: 0;
}
</style>