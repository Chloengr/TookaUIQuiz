<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { Routes } from "@/router";
  import { auth } from "@/stores/auth";
  const router = useRouter();

  if (!auth.isLoggedIn) {
    router.push({ name: Routes.Login });
  }
</script>

<template>
  <div>Historique des Scores</div>
</template>
