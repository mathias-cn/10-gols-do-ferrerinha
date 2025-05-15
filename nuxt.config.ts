// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/tailwindcss', 'dayjs-nuxt', '@nuxt/icon'],
  app: {
    head: {
      title: '10 Gols do Ferrerinha',
      meta: [
        { name: 'description', content: 'Contagem dos 10 gols do Ferrerinha.' },
      ],
      htmlAttrs: {
        lang: 'pt-BR',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/ferrerinha-icon.png' },
      ]
    }
  },
  dayjs: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
    plugins: ['relativeTime', 'advancedFormat'],
  },
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi'],
    }
  },
  ssr: true
})