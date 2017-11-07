<template>
<div class="component-modal modal fade in">
  <div class="modal-backdrop fade in" v-if="backdrop" @click.self="close"></div>
  <div class="modal-dialog" :class="'modal-'+size">
    <button class="close" @click="close">
      <span aria-hidden="true">×</span>
    </button>
    <div class="modal-content">
      <header class="modal-header" v-if="title">{{title}}</header>
      <content class="modal-body">
        <p v-if="message">{{message}}</p>
        <input type="text" class="form-control" v-model="input" v-if="prompt">
        <component :is="name" v-if="name" v-bind="props"></component>
        <slot></slot>
      </content>
      <footer class="modal-footer" v-if="actions&&actions.length">
        <button class="btn" v-for="action in actions" :class="['btn-'+action.type]" @click="onAction(action)">{{action.text}}</button>
      </footer>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    name: {
      type: String,
      default: ''
    },
    component: {
      type: Object,
      default () {
        return {}
      }
    },
    message: {
      type: String,
      default: ''
    },
    prompt: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default () {
        return {}
      }
    },
    size: {
      type: String,
      default () {
        return this.message ? 'sm' : 'md'
      }
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
        var vm = this
        if (!this.message) return []
        return [{
          text: 'OK',
          type: 'success',
          callback () {
            vm.close(true)
          }
        }, {
          text: 'Cancel',
          type: 'default',
          callback () {
            vm.close(false)
          }
        }]
      }
    },
    onClose: {
      type: Function,
      default () {
        return () => {}
      }
    }
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
    close (data) {
      this.onClose(this.prompt ? this.input : data)
      this.$destroy()
    },
    onAction (action) {
      if (action.callback) {
        action.callback()
      }
    }
  },
  mounted () {
    document.body.classList.add('modal-open')
  },
  destroyed () {
    document.body.classList.remove('modal-open')
    this.$el.remove()
  }
}
</script>

<style>
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