<script setup lang="ts">
  import { HTMLInputElement, ref } from 'vue'
  import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
  } from '@headlessui/vue'

  type Props = {
    data?: object
  }

  const props = defineProps<Props>()

  const checked = ref(props.data)

  type Emits = {
    (e: 'update:checked', value?: string): void
  }

  const emit = defineEmits<Emits>()

  const onChange = (event: Event) => {
    emit('update:checked', (event.currentTarget as HTMLInputElement)?.checked)
  }
</script>

<template>
  <div class="w-full px-4 py-5">
    <div class="w-full max-w-md mx-auto">
      <RadioGroup v-bind="$attrs" v-model="checked">
        <RadioGroupLabel class="text-gray-900"
          >Niveau de difficulté</RadioGroupLabel
        >
        <div class="space-y-2">
          <RadioGroupOption
            as="template"
            v-for="data in props.data"
            :key="data.name"
            :value="data"
            v-slot="{ active, checked }"
            @input="onChange($event)"
          >
            <div
              :class="[
                active
                  ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-purple-600 ring-opacity-60'
                  : '',
                checked
                  ? 'bg-sky-900 bg-opacity-75 text-purple-600 '
                  : 'bg-white ',
              ]"
              class="relative flex px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center">
                  <div class="text-sm">
                    <RadioGroupLabel
                      as="p"
                      :class="checked ? 'text-purple-600' : 'text-gray-900'"
                      class="font-medium capitalize"
                    >
                      {{ data.name }}
                    </RadioGroupLabel>
                  </div>
                </div>
                <div v-show="checked" class="flex-shrink-0 text-purple-600">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#FFFF00"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#FFD600"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>
