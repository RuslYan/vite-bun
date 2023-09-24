<script setup lang="ts">
  defineProps<{
    active: boolean
  }>()
</script>

<template>
  <button v-if="active">Login</button>
</template>