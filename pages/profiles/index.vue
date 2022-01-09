<template>
	<div class="jakub104-wrapper">
		all profiles
	</div>
</template>

<script>
	export default {
		nuxtI18n: {
			paths: {
				en: '/profiles',
				pl: '/profile'
			},
		},
		name: "Profiles",
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.jakub104-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>