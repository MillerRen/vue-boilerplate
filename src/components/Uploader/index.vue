<template>
<div class="component-uploader">
  <input type="file" name="file" @change="onChange($event)">
</div>
</template>
<script>
export default {
  data () {
    return {
      url: '/api/files'
    }
  },
  methods: {
    onChange (e) {
      var fd = new FormData()
      fd.append('file', e.target.files[0])
      this.$http.post(this.url, fd)
      .then(() => {})
      .catch(() => {})
      console.log('on change', e)
    }
  }
}
</script>
<style></style>