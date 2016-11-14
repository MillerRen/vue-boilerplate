<template>
<div class="component-uploader">
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
<style></style>