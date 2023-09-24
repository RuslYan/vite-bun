<script setup lang="ts">
  import Nav from './components/Nav.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col p-5">
    <Nav />
    <Main />
    <Footer />
  </div>
</template>

<style lang="scss">
  @import url('./styles/index.scss');
</style>
