<script setup lang="ts">
  import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="bg-purple-900 h-screen" >
    <Navbar />
    <router-view />
  </div>
</template>
