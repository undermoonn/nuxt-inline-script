import MyModule from '../../../dist/module'
import path from 'node:path'

export default defineNuxtConfig({
  modules: [MyModule],
  inlineScript: {
    // buildEntry: [path.resolve(__dirname, './inline-script/index.ts')]
  }
})
