<script setup lang="ts">
import WalletButton from './WalletButton.vue'
</script>

<template>
  <nav>
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/user">User</RouterLink>
    </div>
    <WalletButton :active="true" />
  </nav>
</template>
