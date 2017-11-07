<template>
<div class="component-alert">
  <div class="alert" :class="'alert-'+type">
  <button type="button" class="close" aria-label="Close" @click="close">
    <span aria-hidden="true">&times;</span>
  </button>
  {{message}}
  </div>
</div>
</template>

<script>
export default {
  props: {
    message: '',
    type: {
      type: String,
      default: 'warning'
    },
    duaration: {
      type: Number,
      default: 3000
    }
  },
  methods: {
    close () {
      this.$destroy()
    }
  },
  mounted () {
    var timer = setTimeout(() => {
      clearTimeout(timer)
      this.close()
    }, this.duaration)
  },
  destroyed () {
    this.$el.remove()
  }
}
</script>

<style>
.component-alert {
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  height: 0;
  z-index: 1050;
  text-align: center;
}
.component-alert > .alert {
  display: inline-block;
}
.component-alert .close {
  position: relative;
  right: -6px;
}
</style>