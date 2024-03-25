module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/prettier',
    'plugin:cypress/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/no-lone-template': 'off'
  }
}
