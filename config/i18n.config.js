export default {
	strategy: 'prefix_except_default',
	locales: [
		{ code: 'pl', iso: 'pl', name: 'Polski', file: 'pl.js' },
		{ code: 'en', iso: 'en', name: 'English', file: 'en.js' },
	],
	baseUrl: 'https://scommunity.eu',
	defaultLocale: 'pl',
	langDir: 'locales/',
	vueI18nLoader: true,
	skipSettingLocaleOnNavigate: true,
	// vueI18n: {
	// 	fallbackLocale: 'pl',
	// },
	// parsePages: false,
	// pages: {
	// 	'chats/index': {
	// 		en: '/chats',
	// 		pl: '/czaty'
	// 	},
	// 	'profiles/:id': {
	// 		en: '/profiles',
	// 		pl: '/profile'
	// 	},
	// }
}