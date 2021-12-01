<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import Quiz from '@/components/Quiz.vue'
  const route = useRoute()

  const data = JSON.parse(route.params.results)
</script>

<template>
  <h1 class="font-bold text-5xl text-center text-white">
    Quiz Theme : {{ data[0].category }}
  </h1>
  <div class="flex justify-center w-full p-3">
    <Quiz :questions="data" />
  </div>
</template>
