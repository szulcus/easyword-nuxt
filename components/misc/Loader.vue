<template>
	<div class="loader-component">
		<div
			v-for="i in 3"
			:key="i"
			class="loader__dott"
		/>
	</div>
</template>

<script>
	export default {
		name: 'Loader',
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	@keyframes up {
		0% {
			transform: translateY(0);
		}
		25% {
			transform: translateY(-50%);
		}
		50% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(0);
		}
	}
	.loader-component {
		display: flex;
		.loader__dott {
			width: 12px;
			height: 12px;
			margin: 4px;
			border-radius: 50%;
			background-color: $decorative;
			animation: up 1s both infinite;
			&:nth-child(1) {
				animation-delay: 0.1s;
			}
			&:nth-child(2) {
				animation-delay: 0.2s;
			}
			&:nth-child(3) {
				animation-delay: 0.3s;
			}
		}
	}
</style>
