<template>
<main class="component-main">
  <Navbar></Navbar>
  <transition name="router" mode="out-in">
    <router-view class="view router-view"></router-view>
  </transition>
  <Footer></Footer>
</main>
</template>

<script>
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
