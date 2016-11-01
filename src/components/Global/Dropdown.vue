<template>
<li :class="{open: open}" @click="open=!open">
  <slot></slot>
</li>
</template>
<script>
export default {
  data () {
    return {
      open: false
    }
  }
}
</script>
<style></style>