<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { Routes } from '@/router'
  import { auth, username } from '@/stores/auth'
  import { ref } from 'vue'
  import ModalStarterGame from '@/components/ModalStarterGame.vue'

  const router = useRouter()
  const isOpen = ref(false)

  const closeModal = () => {
    isOpen.value = false
  }

  const openModal = () => {
    isOpen.value = true
  }
</script>

<template>
  <div class="flex-1 min-w-0 max-w-[800px] mx-auto order-1 text-center">
    <h1 class="text-white font-semibold font-size-60 m-9">
      Bonjour {{ username }}, Bienvenue sur Tooka Quiz.
    </h1>
    <div class="flex justify-center">
      <img src="@/assets/logo1.gif" alt="logo" />
    </div>
    <div class="m-10">
      <p class="font-nunito text-white font-size-50">
        Le quiz de culture générale
      </p>
      <p class="font-nunito text-white font-size-50">
        Choisissez un nombre de questions, un niveau de difficulté et une
        catégorie
      </p>
    </div>
    <div class="flex justify-center">
      <button
        type="button"
        class="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 m-6 rounded-full"
        @click="openModal"
      >
        Lancer une partie
      </button>
      <button
        type="button"
        class="bg-transparent border border-purple-400 hover:bg-purple-700 hover:text-white text-purple-400 py-2 px-4 m-6 rounded-full"
      >
        Voir mes scrores
      </button>
    </div>
  </div>
  <ModalStarterGame :is-open="isOpen" @close="closeModal" />
</template>
<style scoped>
  img {
    width: 200px;
  }
</style>
