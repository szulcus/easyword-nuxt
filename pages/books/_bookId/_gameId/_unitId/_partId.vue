<template>
	<component
		:is="`game-${$route.params.gameId}`"
		:words="part.words"
		:cathegory="part.name"
	/>
</template>

<script>
	import GameEasyWrite from '~/components/games/EasyWrite.vue';
	import GameEasyShoot from '~/components/games/EasyShoot.vue';
	import GameEasyMatch from '~/components/games/EasyMatch.vue';

	export default {
		name: 'Book',
		components: {
			GameEasyWrite,
			GameEasyShoot,
			GameEasyMatch,
		},
		async asyncData({ $fire, route, error }) {
			if (!['easy-write', 'easy-shoot', 'easy-match'].includes(route.params.gameId)) {
				error({ statusCode: 404, message: 'invalid-game-name' })
			}
			try {
				const part = await $fire.firestore
					.collection('books').doc(route.params.bookId)
					.collection('units').doc(route.params.unitId)
					.collection('parts').doc(route.params.partId)
					.get();
				if (!part.data()) error({ statusCode: 404, message: 'data-not-found' })
				return {
					part: part.data()
				}
			}
			catch (err) {
				error(err.code);
			}

		},
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	.book-view {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
