<script setup lang="ts">
  import { InputHTMLAttributes, ref } from 'vue'

  type Props = {
    modelValue: string
  }

  const props = defineProps<Props>()

  type Emits = {
    (e: 'update:modelValue', value?: string): void
  }

  const emit = defineEmits<Emits>()

  const onInput = (event: Event) => {
    emit('update:modelValue', (event.currentTarget as HTMLInputElement)?.value)
  }
</script>

<template>
  <div class="w-full px-4 py-5">
    <label class="text-gray-900">Nombre de questions :</label>
    <div
      class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1"
    >
      <input
        v-bind="$attrs"
        type="number"
        placeholder="De 1 à 20"
        :value="props.modelValue"
        @input="onInput($event)"
        class="flex items-center bg-white relative px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none"
      />
    </div>
  </div>
</template>
