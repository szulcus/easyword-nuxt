<template>
	<div class="home-view">
		<h1 class="home__logo">
			<span class="logo__letter">E</span>asy<span class="logo__letter">W</span>ord
		</h1>
		<h2 class="home__title">
			Książki
		</h2>
		<div class="home__items">
			<nuxt-link
				class="item"
				:to="localePath({ name: 'books-bookId', params: { bookId: book.id } })"
				v-for="book in books"
				:key="book.id"
			>
				<img
					class="item__img"
					:src="book.cover"
					:alt="book.title"
					:title="book.title"
				/>
				<div class="item__languages">
					<img
						v-for="lang in book.supportedLanguages"
						:key="lang"
						class="lang"
						:src="require(`~/assets/images/icons/flags/${lang}.svg`)"
						:alt="lang"
					/>
				</div>
			</nuxt-link>
			<nuxt-link :to="localePath({ name: 'books-create'})" class="item item--create">
				<fa icon="plus" />
			</nuxt-link>
		</div>
		<h2 class="home__title">
			Zbiory słownistwa
		</h2>
		<div class="home__items">
			<nuxt-link
				class="item"
				:to="localePath({ name: 'books-bookId', params: { bookId: book.id } })"
				v-for="book in books"
				:key="book.id"
			>
				<img
					class="item__img"
					:src="book.cover"
					:alt="book.title"
					:title="book.title"
				/>
			</nuxt-link>
			<nuxt-link :to="localePath({ name: 'books-create'})" class="item item--create">
				<fa icon="plus" />
			</nuxt-link>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { FirebaseError } from '@firebase/util'

	export default Vue.extend({
		async asyncData({ $fire, error }) {
			try {
				const snap = await $fire.firestore.collection('books').get();
				return {
					books: snap.docs.map(doc => doc.data()),
				};
			}
			catch (err: unknown) {
				if (err instanceof FirebaseError) {
					error({ statusCode: 500, message: err.message });
				}
				else console.log(err);
			}
		},
		async mounted() {
			const data: object = await this.$pixabayApi.$get('/', {
				params: {
					q: 'sad',
					lang: 'en'
				}
			})
			console.log(data);
			console.log(this.$wordsToArray(['owdowiały']))
			// const units = require('~/assets/data/newWords.json').units
			// this.$fire.firestore.collection('users-old').get().then(snap => {
			// 	snap.forEach(doc => {
			// 		let newUser = {
			// 			points: {
			// 				books: {
			// 					'macmillan-repetytorium-dla-uczniow-liceow-i-technikow-poziom-podstawowy-i-rozszerzony': {}
			// 				}
			// 			}
			// 		};
			// 		if (doc.data()['easy-word'].points) {
			// 			Object.entries(doc.data()['easy-word'].points.book_01.units).forEach(([uIndex, uValue]) => {
			// 				const unitIndex = +uIndex.replace('unit_', '') - 1;
			// 				if (units[unitIndex]) {
			// 					const unitId = this.$slug(units[unitIndex].title);
			// 					const parts = Object.entries(uValue.parts).map(([pIndex, pValue]) => {
			// 						const partIndex = pIndex !== 'test' ? +pIndex.replace('part_', '') - 1 : NaN;
			// 						const partId = this.$slug(units[unitIndex].parts[partIndex]?.name || 'test');
			// 						return { partId, pValue };
			// 					})
			// 					if (parts.some(part => part.pValue.points > 0)) {
			// 						newUser.points.books['macmillan-repetytorium-dla-uczniow-liceow-i-technikow-poziom-podstawowy-i-rozszerzony'][unitId] = {}
			// 					}
			// 					parts.forEach(({ partId, pValue }) => {
			// 						if (pValue.points > 0) {
			// 							const wordsCount = units[unitIndex].parts.find(part => this.$slug(part.name) === partId)?.words.length;
			// 							const level = pValue.points / 2 / wordsCount;
			// 							newUser.points.books['macmillan-repetytorium-dla-uczniow-liceow-i-technikow-poziom-podstawowy-i-rozszerzony'][unitId][partId] = {
			// 								'easy-write': {
			// 									'en-pl': {
			// 										goodAnswers: [],
			// 										level: level <= 1 ? 'beginner' : level <= 2 ? 'advanced' : 'masterful',
			// 										points: pValue.points,
			// 									},
			// 								},
			// 							}
			// 						}
			// 					})
			// 				}
			// 			})
			// 			// if(Object.keys(newUser.points.books['macmillan-repetytorium-dla-uczniow-liceow-i-technikow-poziom-podstawowy-i-rozszerzony']).length) {
			// 			// 	this.$fire.firestore.collection('users').doc(doc.data().info.email).update({
			// 			// 		points: newUser.points
			// 			// 	})
			// 			// }
			// 		}
			// 	})
			// })
		}
	});
</script>

<style lang="scss" scoped>
	.home-view {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		.home__logo {
			font-size: 3rem;
			letter-spacing: 0.1rem;
			margin-bottom: 50px;
			// @include line-bottom;
			.logo__letter {
				color: $decorative;
			}
		}
		.home__title {
			font-size: 1.5rem;
			@include line-bottom;
			&::first-letter {
				color: $decorative;
			}
		}
		.home__items {
			display: flex;
			justify-content: center;
			margin-bottom: 20px;
			.item {
				position: relative;
				width: 150px;
				height: 200px;
				margin: 10px;
				transition: 0.2s ease;
				border-radius: 10px;
				@include hover {
					box-shadow: 0 5px 10px $bg-secondary;
					transform: translateY(-3px);
				}
				.item__img {
					width: 100%;
					height: 100%;
					border-radius: 10px;
					object-fit: cover;
				}
				.item__languages {
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translate(-50%, 50%);
					display: flex;
					// background-color: $bg-primary;
					// padding: 5px;
					// border-radius: 15px;
					// border: 3px solid $bg-secondary;
					.lang {
						width: 25px;
						height: 25px;
						border-radius: 50%;
						margin-right: -5px;
						box-shadow: 0 0 0 5px $bg-primary;
						&:last-child {
							margin-right: 0;
						}
					}
				}
			}
			.item--create {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30px;
				font-weight: bold;
				background-color: $bg-secondary;
				@include hover {
					box-shadow: none;
					transform: none;
					background-color: rgb($bg-secondary, 0.7);
				}
			}
		}
	}
</style>
