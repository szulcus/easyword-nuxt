<template>
	<div class="default-wrapper">
		<CustomHeader />
		<div class="default__view">
			<nuxt />
			<CustomToasts />
		</div>
	</div>
</template>

<script>
	import CustomHeader from '~/components/custom/Header.vue';
	import CustomToasts from '~/components/custom/Toasts.vue';

	export default {
		name: "default",
		components: {
			CustomHeader,
			CustomToasts,
		},
		head() {
			const head = this.$nuxtI18nHead({ addSeoAttributes: true });
			return {
				...head,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.default-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.default__nav {
			height: 50px;
			background-color: $bg-secondary;
		}
		.default__view {
			flex: 1;
			padding: 20px;
		}
	}
</style>