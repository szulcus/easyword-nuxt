import Vue from 'vue';
import { Plugin } from '@nuxt/types';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

declare module 'vue/types/vue' {
	interface Vue {
		$pixabayApi: NuxtAxiosInstance;
	}
}

const pixabayApi: Plugin = ({ $axios }, inject) => {
	// Create a custom axios instance
	const api = $axios.create({
		baseURL: 'https://pixabay.com/api/',
		params: {
			key: '14070812-2adcd23bbf6738f98fdc1f2e8',
			orientation: 'horizontal'
		}
	});
	console.log(api.$get);
	// Inject to context as $api
	inject('pixabayApi', api)
}

export default pixabayApi;