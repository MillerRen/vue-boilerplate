<template>
<div class="component-modal modal fade in">
  <div class="modal-backdrop fade in" v-if="backdrop" @click.self="close"></div>
  <div class="modal-dialog" :class="'modal-'+size">
    <button class="close" @click="close">
      <span aria-hidden="true">×</span>
    </button>
    <component :is="name" @close="close" v-bind.sync="props"></component>
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
    },
    props: {
      type: Object,
      default () {
        return {}
      }
    },
    onClose: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    close (data) {
      this.onClose(data)
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

<style scoped>
.component-modal {
  display: block;
}
.modal .modal-backdrop {
  z-index: 0;
}
.modal .close {
  position: relative;
  z-index: 1;
  margin-right: 12px;
  margin-top: 12px;
}
.modal .modal-full {
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 0;
}
.modal .modal-full .modal-content {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
}
</style>