<template>
<div class="component-modal modal fade in" v-if="show">
  <div class="modal-backdrop fade in" v-if="backdrop" @click.self="close"></div>
  <div class="modal-dialog" :class="'modal-'+size">
    <button class="close" @click="close">
      <span aria-hidden="true">×</span>
    </button>
    <div class="modal-content">
      <header class="modal-header" v-if="title">{{title}}</header>
      <content class="modal-body"><slot></slot></content>
      <footer class="modal-footer" v-if="actions&&actions.length">
        <button class="btn" v-for="action in actions" @click="onAction">{{action.text}}</button>
      </footer>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    title: {
      type: String,
      default: ''
    },
    backdrop: {
      type: Boolean,
      default: true
    },
    actions: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    close () {
      this.$destroy()
    },
    onaction (action) {
      if (action.callback) {
        action.callback()
      }
    }
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
.modal .modal-body {
  display: block;
}
</style>