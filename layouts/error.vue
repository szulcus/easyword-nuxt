<template>
	<div class="error-wrapper">
		{{ error.statusCode }} error
		{{ error.message === 'This page could not be found' ? 'Nie znaleniono strony!' : error.message }}
		<nuxt-link to="/">Wróć</nuxt-link>
	</div>
</template>

<script>
	export default {
		transition: {
			name: 'page',
			mode: 'in-out'
		},
		name: "error",
		props: {
			error: Object,
		},
		data() {
			return {
				errors: [
					'permission-denied',
					'invalid-game-name',
					'data-not-found',
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.error-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>