// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://alexsandrarodrigues.com.br').replace(/\/$/, '')

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      siteUrl,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap',
        },
        { rel: 'preload', as: 'image', href: '/img/alexsandra-retrato-860.webp', type: 'image/webp', fetchpriority: 'high' },
      ],
      meta: [
        { name: 'theme-color', content: '#123B4C' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'geo.region', content: 'BR-SC' },
        { name: 'geo.placename', content: 'Itapema' },
        { name: 'geo.position', content: '-27.1351688;-48.5976398' },
        { name: 'ICBM', content: '-27.1351688, -48.5976398' },
      ],
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/img/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/', '/robots.txt', '/sitemap.xml', '/llms.txt'],
    },
    compressPublicAssets: true,
  },

  experimental: {
    inlineRouteRules: false,
  },
})
