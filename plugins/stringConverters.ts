import Vue from 'vue';
import { Plugin } from '@nuxt/types';
import latinize from 'latinize';
import { paramCase } from 'param-case';

console.log('plugin is here!');
declare module 'vue/types/vue' {
	interface Vue {
		$slug(message: string): string;
		$wordsToString(items: string[]): string;
		$wordsToArray(items: string[]): string[];
	}
}
declare module '@nuxt/types' {
	// nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
	interface NuxtAppOptions {
		$slug(message: string): string;
		$wordsToString(items: string[]): string;
		$wordsToArray(items: string[]): string[];
	}
	// nuxtContext.$myInjectedFunction
	interface Context {
		$slug(message: string): string;
		$wordsToString(items: string[]): string;
		$wordsToArray(items: string[]): string[];
	}
}
declare module 'vuex/types/index' {
	// this.$myInjectedFunction inside Vuex stores
	interface Store<S> {
		$slug(message: string): string;
		$wordsToString(items: string[]): string;
		$wordsToArray(items: string[]): string[];
	}
}

const stringConverters: Plugin = (_context, inject) => {
	inject('slug', (text: string) => paramCase(latinize(text)));
	inject('wordsToString', (items: string[]) => {
		return items.map(words => {
			return words.split(' ').map(word => {
				if (word.match(/^.+_.+_.+$/)) {
					const parts = word.split('_');
					return `${parts[0]}${parts[1]}(${parts.slice(2).join(', ')})`;
				}
				return word
			}).join(' ');
		}).join(' / ');
	});
	inject('wordsToArray', (items: string[]) => {
		return items.map(words => {
			let feminizations: string[] | undefined;
			const wordSchema: string = words.replace(/(_.){2,}/g, (x) => {
				feminizations = x.slice(1).split('_');
				return '_';
			})
			console.log({ wordSchema, feminizations });
			if (feminizations) return feminizations.map((feminization) =>  wordSchema.replaceAll('_', feminization));
			else return wordSchema;
		}).flat();
	});
}

export default stringConverters;