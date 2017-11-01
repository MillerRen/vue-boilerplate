<template>
  <div class="component-confirm modal-content">
    <div class="modal-header">Are you sure?</div>
    <div class="modal-body">
      <div class="msg">{{msg}}</div>
      <input v-if="prompt" v-model="input" type="text" class="form-control" />
    </div>
    <div class="modal-footer">
      <button class="btn btn-success" @click="onOK">O K</button>
      <button class="btn btn-default" @click="onCancel">Cancel</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'confirm',
  props: {
    msg: {
      type: String,
      default: ''
    },
    prompt: Boolean
  },
  data () {
    return {
      input: null
    }
  },
  methods: {
    onOK () {
      this.$emit('close', this.prompt ? this.input : true)
    },
    onCancel () {
      this.$emit('close', this.prompt ? this.input : false)
    }
  },
  mounted () {
  }
}
</script>
<style></style>