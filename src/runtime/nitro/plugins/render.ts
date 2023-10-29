import type { NitroAppPlugin } from 'nitropack'

const InlineScriptNitroPlugin: NitroAppPlugin = (nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.head.push(`<!-- inline script inject -->`)
  })
}

export default InlineScriptNitroPlugin
