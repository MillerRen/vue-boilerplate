<template>
<div class="view-profile container">
  <div class="col-sm-4 col-sm-offset-4">
    <img :src="src" alt="" class="img-responsive img-cycle">
    <Uploader :url="url" @success="onUploadSuccess" @error="onUploadError"></Uploader>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      url: '/api/files',
      src: require('../../assets/logo.png')
    }
  },
  methods: {
    onUploadSuccess (data) {
      this.src = '/api/files/entity/' + data._id
    },
    onUploadError (err) {
      console.log(err)
    }
  }
}
</script>

<style></style>