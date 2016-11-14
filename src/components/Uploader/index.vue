<template>
<div class="component-uploader">
  <slot></slot>
  <input type="file" name="file" @change="onChange($event)">
</div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onChange (e) {
      var fd = new FormData()
      fd.append('file', e.target.files[0])
      this.$http.post(this.url, fd)
      .then((response) => {
        this.$emit('success', response.body)
      })
      .catch((err) => {
        this.$emit('error', err)
      })
    }
  }
}
</script>

<style>
.component-uploader {
  position: relative;
}

.component-uploader input {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: none;
  cursor: pointer;
}
</style>