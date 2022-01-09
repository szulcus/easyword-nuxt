<template>
	<div class="index-wrapper">
		chats
	</div>
</template>

<script>
	export default {
		nuxtI18n: {
			paths: {
				en: '/chats',
				pl: '/czaty',
			},
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>