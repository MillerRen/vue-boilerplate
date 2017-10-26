<template>
<div class="jumbotron">
    <div class="container text-center">
      <img src="../../assets/awesome-vue.png" class="img-responsive">
      <hello class="text-center"></hello>
    </div>
  </div>
</template>

<script>
import Hello from '@/components/Hello'

export default {
  name: 'jumbotron',
  components: {
    Hello
  }
}
</script>
