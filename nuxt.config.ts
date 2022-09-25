import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  meta: {
    title: 'SHOP LUKA',
  },
  css: [
    '@/assets/scss/index.scss',
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      backendUrl: process.env.BACKEND_URL,
    }
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
