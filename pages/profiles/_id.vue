<template>
	<div class="nick-wrapper">
		nick: {{ $route.params.id }}
	</div>
</template>

<script>
	export default {
		// nuxtI18n: {
		// 	paths: {
		// 		en: '/profiles/:id',
		// 		pl: '/profile/:id'
		// 	},
		// },
		name: "ProfileId",
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nick-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>