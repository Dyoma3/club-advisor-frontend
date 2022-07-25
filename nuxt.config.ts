import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
	css: [
    '@/assets/main.scss',
    // 'vuetify/lib/styles/main.sass',
  ],
  // meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  meta: {
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  },
  modules: [
    '@pinia/nuxt',
  ],
	vite: {
		css: {
				preprocessorOptions: {
						scss: { additionalData: '@import "@/assets/variables.scss";' },
				},
		},
    define: {
      'process.env.DEBUG': false,
    },
	},
})
