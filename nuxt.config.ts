// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-06-30',
  ssr: false,
  devtools: {
    enabled: true,
  },
  routeRules: {
    '/': { prerender: true },
  },
  css: ['~/styles/tailwind.css'],
  components: [
    {
      path: '~/components',
      pattern: '**/index.vue',
      global: true,
    },
  ],
  pages: { pattern: ['**/*.vue', '!**/components/**/*.vue'] },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
  ],
  fonts: {
    providers: {
      google: false,
      googleicons: false,
    },
    provider: 'local',
    families: [
      {
        name: 'MiSans',
        provider: 'local',
        weights: [400, 700],
        src: [{ url: '/fonts/MiSans-Normal.woff2' }, { url: '/fonts/MiSans-Bold.woff2' }],
      },
    ],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})
