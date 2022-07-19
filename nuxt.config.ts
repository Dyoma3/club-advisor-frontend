import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: [],
	vite: {
		css: {
				preprocessorOptions: {
						scss: { additionalData: '@import "@/assets/variables.scss";' },
				},
		},
	},
})
