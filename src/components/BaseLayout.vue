<script setup lang="ts">
import Header from './Nav.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="container">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
