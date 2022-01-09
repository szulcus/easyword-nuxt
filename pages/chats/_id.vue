<template>
	<div class="id-wrapper">
		chat id: {{ $route.params.id }}
	</div>
</template>

<script>
	export default {
		name: "ChatId",
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.id-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>