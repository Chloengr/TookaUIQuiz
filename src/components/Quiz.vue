<script setup lang="ts">
  import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
  import { ref } from 'vue'

  type Props = {
    modelValue?: any
    questions?: object
  }

  const props = defineProps<Props>()

  const idx = ref(0)
  const count = ref(props.questions.length)
  let selectedAnswer = ref('')
  let correctAnswers: [] = []
  let answers: [] = []

  correctAnswers.push(props.questions[idx.value].correct_answer)
  props.questions[idx.value].incorrect_answers.forEach((result) =>
    answers.push(correctAnswers[0], result)
  )

  type Emits = {
    (e: 'update:modelValue', value?: string): void
    (e: 'nextQuestion'): void
    (e: 'showResults'): void
  }

  const emit = defineEmits<Emits>()

  const updateModelValue = (value: any) => {
    emit('update:modelValue', value)
    selectedAnswer.value = value
    console.log('selectedAnswer', selectedAnswer.value)
  }

  console.log('Answers', answers)
  console.log('correctAnswers', correctAnswers)
</script>

<template>
  <div class="w-full max-w-xl p-3">
    <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
      <div v-if="idx < count">
        <p class="text-2xl font-bold">
          {{ props.questions[idx]['question'] }}
        </p>
        <RadioGroup
          :model-value="modelValue"
          @update:model-value="updateModelValue"
        >
          <div class="space-y-2">
            <RadioGroupOption
              as="template"
              v-for="(answer, index) in answers"
              :key="index"
              :value="answers[index]"
              v-slot="{ active, checked }"
            >
              <div
                :class="[
                  active
                    ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-purple-600 ring-opacity-60 bg-sky-900 bg-opacity-75 text-purple-600'
                    : '',
                  checked
                    ? 'bg-sky-900 bg-opacity-75 text-purple-600'
                    : 'bg-white ',
                ]"
                class="relative flex px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none"
              >
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center">
                    <div class="text-sm">
                      <RadioGroupLabel
                        as="p"
                        :class="
                          active || checked
                            ? 'text-purple-600'
                            : 'text-gray-900'
                        "
                        class="font-medium capitalize"
                      >
                        {{ answers[index] }}
                      </RadioGroupLabel>
                    </div>
                  </div>
                  <div v-show="active" class="flex-shrink-0 text-purple-600">
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
        <div class="mt-6 flow-root">
          <button
            @nextQuestion="idx++"
            v-show="idx < count - 1"
            class="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
          >
            Next &gt;
          </button>
          <button
            @showResults="idx++"
            v-show="idx == count - 1"
            class="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
          >
            Finish
          </button>
        </div>
      </div>
      <div v-else>
        <h2 class="text-bold text-3xl">Results</h2>
        <div class="flex justify-start space-x-4 mt-6">
          <p>
            Correct Answers:
            <span class="text-2xl text-green-700 font-bold">{{
              correctAnswers
            }}</span>
          </p>
          <p>
            Your Answers:
            <span class="text-2xl text-red-700 font-bold">{{
              selectedAnswer
            }}</span>
          </p>
        </div>
        <div class="mt-6 flow-root">
          <button
            @click=""
            class="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
          >
            Validate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
