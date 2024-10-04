/* eslint-disable no-undef */
import { defineConfig } from 'vitest/config'

process.env.NODE_ENV = 'test';

export default defineConfig({
  test: {
    include: ['src/test/**/*.spec.js', 'dummy-server/test/**/*.spec.js']
  }
})
