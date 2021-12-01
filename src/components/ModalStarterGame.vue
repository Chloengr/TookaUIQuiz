<script setup lang="ts">
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  } from '@headlessui/vue'
  import { useField, useForm } from 'vee-validate'
  import { userID } from '@/stores/auth'
  import RadioGroup from '@/components/RadioGroup.vue'
  import ListSelect from '@/components/ListSelect.vue'
  import Counter from '@/components/Counter.vue'

  type Props = {
    isOpen: boolean
  }

  defineProps<Props>()

  type Emits = {
    (e: 'close'): void
  }

  const emits = defineEmits<Emits>()

  const { handleSubmit, errors } = useForm()
  const { value: numberQuestion } = useField<string>('numberQuestion')
  const { value: difficulty } = useField<string>('difficulty')
  const { value: categoryID } = useField<string>('categoryID')


  const onSubmit = handleSubmit(async (values) => {
    console.log("values", values)
    const params = {
      userID: userID,
      numberQuestion: values.numberQuestion,
      difficulty: values.difficulty,
      categoryID: values.categoryID,
    }
    console.log(params)
    // await axios.post('http://localhost:3000/game', params).then((res) => {
    //   if (res?.data) {
    //     router.push({ name: Routes.Game })
    //   }
    // })
  })
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="emits('close')">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
          </TransitionChild>
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Choisissez vos paramètres
              </DialogTitle>
              <form @submit="onSubmit">
                <div class="mt-2">
                  <ListSelect v-model="categoryID" />
                  <RadioGroup v-model="difficulty" />
                  <Counter v-model="numberQuestion" />
                </div>
                <button
                  type="submit"
                  class="inline-flex justify-center px-4 py-2 mt-4 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  C'est parti !
                </button>
              </form>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
