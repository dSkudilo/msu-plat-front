import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr: true,
  build: {
    transpile: ['vuetify']
  },
  css: [
    '@/assets/styles/index.scss'
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt'
    // '@nuxtjs/proxy'
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.API_URL
    }
  },
  router: {
    middleware: ['cookie-consent']
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [
        {
          children: `
            document.cookie = 'my-cookie=my-value; Path=/; Max-Age=31536000; Secure; SameSite=None;',
          `,
          type: 'application/javascript'
        }
      ]
    }
  },

  server: {
    // https: {
    //   key: '/path/to/server.key',
    //   cert: '/path/to/server.crt'
    // },
    host: '0.0.0.0',
    port: 3000,
    timing: {
      total: true,
      request: true,
      response: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite: { '^/api': '' }
      }
    },
    credentials: true // Enable credentials option
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
})
