import { resolve } from 'node:path'

export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  devtools: { enabled: true },
  inlineScript: {
    buildEntry: [resolve(__dirname, './inline-script/hello.ts')]
  }
})
