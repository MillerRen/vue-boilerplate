<template>
<div class="component-modal modal" v-if="show" @click.self="close()">
  <div class="modal-dialog" :class="modalSize">
    <component :is="modalView" :data="data"></component>
  </div>
</div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md'
    },
    modalView: '',
    data: {}
  },
  computed: {
    show () {
      return !!this.modalView
    },
    modalSize () {
      return 'modal-' + this.size
    }
  },
  methods: {
    close () {
      this.$emit('close', this.data)
    }
  }
}
</script>

<style>
.component-modal {
  display: block;
  background: rgba(0,0,0,.6)
}
</style>