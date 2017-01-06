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
      console.log(this.modalView)
      return !!this.modalView
    },
    modalSize () {
      return 'modal-' + this.size
    }
  },
  methods: {
    close () {
      this.$store.commit('CLOSE_DIALOG')
    }
  }
}
</script>

<style>
.modal.component-modal {
  display: block;
  background: rgba(0,0,0,.6)
}
</style>