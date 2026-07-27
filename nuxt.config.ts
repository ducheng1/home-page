const SITE_TITLE = '渡城电子日记'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  appId: 'home-page',
  compatibilityDate: '2026-06-30',
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: true,
  },
  appConfig: {
    nuxt: {
      title: SITE_TITLE,
    },
  },
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
  // seo配置
  site: {
    name: SITE_TITLE,
    url: 'https://dcwedu.top',
  },
  ogImage: {
    enabled: false,
  },
  robots: {
    allow: '/',
  },
})
