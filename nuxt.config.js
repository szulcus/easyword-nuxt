import i18nConfig from './config/i18n.config';
import firebaseConfig from './config/firebase.config';

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Scommunity',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Scommunity description' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400&display=swap' },
		],
	},
	env: {
		FIRE_ENV: process.env.FIRE_ENV,
	},
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@fortawesome/fontawesome-free/css/all.css',
		'~/assets/styles/global.scss',
	],
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/clickOutside.js',
		'~/plugins/stringConverters.ts',
		'~/plugins/toastNotification.js',
		'~/plugins/pixabayApi.ts',
	],
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: false,
	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/fontawesome',
		'@nuxt/image',
		'nuxt-typed-vuex',
		'nuxt-gsap-module',
	],
	fontawesome: {
		component: 'fa',
		icons: {
			solid: true,
			brands: true,
		},
	},
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		'@nuxtjs/style-resources',
		'@nuxtjs/dayjs',
		'@nuxtjs/axios',
		['@nuxtjs/firebase', firebaseConfig],
		['@nuxtjs/i18n', i18nConfig],
	],
	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		meta: {
			title: 'Scommunity',
			author: 'Jakub Schulz',
		},
		manifest: {
			lang: 'pl'
		},
		icon: {
			sizes: [64, 120, 144, 152, 192, 384, 512],
		},
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		styleResources: {
			scss: './assets/styles/_*.scss',
		},
	},
	pageTransition: {
		name: 'my-page',
		mode: 'out-in',
	},
}
