<script setup lang="ts">
  import {
    LockClosedIcon,
    LoginIcon,
    PlusCircleIcon,
  } from '@heroicons/vue/solid'
  import { useField, useForm } from 'vee-validate'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { logIn, logOut } from '@/stores/auth'
  import { Routes } from '@/router'
  import axios from 'axios'
  const router = useRouter()

  type Props = {
    isRegister?: boolean
  }
  const props = defineProps<Props>()

  const { handleSubmit, errors } = useForm()

  const { value: username } = useField<string>('username')
  const { value: password } = useField<string>('password')

  const error = ref<string | null>(null)

  const onSubmit = handleSubmit(async (values) => {
    const loginInput = {
      username: values.username!,
      password: values.password!,
    }
    const postURl = props.isRegister
      ? 'http://localhost:3000/register'
      : 'http://localhost:3000/login'

    await axios.post(postURl, loginInput).then((res) => {
      if (res?.data) {
        logIn({ username: res.data.username, token: res.data.access_token })
        router.push({ name: Routes.Home })
      }
    })
  })
</script>

<template>
  <form class="space-y-6" @submit="onSubmit">
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="username" class="sr-only">Pseudo</label>
        <input
          v-model="username"
          name="username"
          required=""
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Pseudo"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Mot de passe</label>
        <input
          v-model="password"
          name="password"
          type="password"
          required=""
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Mot de passe"
        />
      </div>
    </div>

    <div class="flex m-10">
      <button
        type="submit"
        class="group relative w-full flex justify-center py-2 px-9 mx-5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <LockClosedIcon
            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        </span>
        Valider
      </button>
      <div v-if="!isRegister">
        <router-link :to="{ name: Routes.Register }">
          <button
            class="group relative w-full flex justify-center py-2 px-9 mx-5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <PlusCircleIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            S'inscrire
          </button>
        </router-link>
      </div>
      <div v-if="isRegister">
        <router-link :to="{ name: Routes.Signin }">
          <button
            class="group relative w-full flex justify-center py-2 px-9 mx-5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LoginIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Se connecter
          </button>
        </router-link>
      </div>
    </div>
  </form>
</template>
