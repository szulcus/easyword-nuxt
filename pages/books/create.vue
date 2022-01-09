<template>
	<div class="create-wrapper">
		create book
	</div>
</template>

<script>
	export default {
		name: 'Create',
		middleware: 'logged',
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	.create-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
