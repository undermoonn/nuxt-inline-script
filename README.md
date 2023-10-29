# 🚧 Nuxt Inline Script

> This module is under development, **DO NOT** use in production.

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Bundle script into html head with nuxt shared build config.

## Quick Setup

1. Add `nuxt-inline-script` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-inline-script

# Using yarn
yarn add --dev nuxt-inline-script

# Using npm
npm install --save-dev nuxt-inline-script
```

2. Add `nuxt-inline-script` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['nuxt-inline-script'],
  inlineScript: {
    buildEntry: ['path/to/script']
  }
})
```

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-inline-script/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-inline-script
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-inline-script.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-inline-script
[license-src]: https://img.shields.io/npm/l/nuxt-inline-script.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-inline-script
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
