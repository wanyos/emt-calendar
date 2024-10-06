/* eslint-disable no-undef */
import vue from 'eslint-plugin-vue'
import cypress from 'eslint-plugin-cypress'
import vueParser from 'vue-eslint-parser'
import vitest from 'eslint-plugin-vitest'

export default [
  {
    files: ['**/*.js', '**/*.vue', 'dummy-server/**/*.js'],
    ignores: ['node_modules'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      vue,
      cypress,
      vitest
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'vue/multi-word-component-names': 0,
      'no-undef': 'error',
      'quotes': ['error', 'single'],
      'vitest/no-test-prefixes': 'error',
      'vitest/no-disabled-tests': 'warn',
      'vitest/no-focused-tests': 'warn'
    }
  }
]
