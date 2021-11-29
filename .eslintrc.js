module.exports = {
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'import/internal-regex': '^@aipmi-ouvre-boites/',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['unused-imports'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['.svg', 'pwa-register', '@aipmi-ouvre-boites/uikit'],
      },
    ],
    'vue/no-v-html': 'off',
  },
}
