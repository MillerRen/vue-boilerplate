<template>
<div class="component-modal modal fade in" v-show="show">
  <div class="modal-backdrop fade in" v-if="backdrop" @click.self="close"></div>
  <div class="modal-dialog" :class="'modal-'+size">
    <button class="close" @click="close">
      <span aria-hidden="true">×</span>
    </button>
    <div class="modal-content">
      <header class="modal-header" v-if="title">{{title}}</header>
      <content class="modal-body">
        <component :is="component.name" v-bind="props" v-on="events"></component>
      </content>
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
    props: {
      type: Object,
      default () {
        return {}
      }
    },
    actions: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      show: false,
      component: {},
      events: {}
    }
  },
  methods: {
    beforeUpdate () {
      document.body.classList.add('modal-open')
    },
    close () {
      document.body.classList.remove('modal-open')
      this.$emit('close')
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
  margin-right: 8px;
  margin-top: 6px;
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