<template>
<div class="component-modal modal fade in">
  <div class="modal-backdrop fade in" v-if="backdrop" @click.self="close"></div>
  <div class="modal-dialog" :class="'modal-'+size">
    <component :is="name" @close="close"></component>
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
  methods: {
    close () {
      this.$destroy()
    }
  },
  beforeDestroy () {
    document.body.classList.remove('modal-open')
    this.$el.remove()
  },
  mounted () {
    document.body.classList.add('modal-open')
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