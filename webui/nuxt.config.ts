// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'pathe'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/nuxt'
  ],
  ssr: false,
  devtools: {
    enabled: true
  },
  nitro: {
    output: {
      // 生成静态资源输出到项目根目录的 dist/
      publicDir: resolve('./dist'),
    },
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/api/**': {
      cors: true
    }
  },

  compatibilityDate: '2024-07-11',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
