<script setup lang="ts">
  import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="bg-purple-900 forHeight" >
    <Navbar />
    <router-view />
  </div>
</template>

<style scoped>
  .forHeight {
    height: 100vh;
  }
</style>
