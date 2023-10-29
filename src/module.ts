import { defineNuxtModule, addServerPlugin } from '@nuxt/kit'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { type InlineConfig, build, mergeConfig } from 'vite'

export interface ModuleOptions {
  buildEntry?: string[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-inline-script',
    configKey: 'inlineScript'
  },
  setup(moduleOptions, nuxt) {
    const buildEntry = moduleOptions.buildEntry

    if (!buildEntry?.length) {
      return
    }

    buildEntry.forEach((_, index) => {
      addServerPlugin(resolve(__dirname, './runtime/nitro/plugins/render-injected-' + index))
    })

    nuxt.hook('vite:extendConfig', async (config, env) => {
      if (env.isServer) {
        return
      }
      const outputDir = resolve(config.build?.outDir!, '_inline_script')

      const pluginCode = await readFile(
        resolve(__dirname, './runtime/nitro/plugins/render.ts'),
        'utf-8'
      )

      await Promise.all(
        buildEntry.map(async (entry, index) => {
          const filename = `_script_${index}.js`
          const outputFile = resolve(outputDir, filename)
          const inlineScriptBuildConfig: InlineConfig = {
            build: {
              minify: false,
              sourcemap: false,
              rollupOptions: {
                input: entry,
                output: {
                  entryFileNames: filename,
                  dir: outputDir
                }
              }
            }
          }

          await build(mergeConfig(config, inlineScriptBuildConfig))

          const code = await readFile(outputFile, 'utf-8')

          await writeFile(
            resolve(__dirname, `./runtime/nitro/plugins/render-injected-${index}.ts`),
            pluginCode.replace('<!-- inline script inject -->', `<script>${code}</script>`),
            'utf-8'
          )
        })
      )
    })
  }
})
