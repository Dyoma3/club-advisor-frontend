import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
	css: [
    '@/assets/main.css',
    'vuetify/lib/styles/main.sass',
    'mdi/css/materialdesignicons.min.css',
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
