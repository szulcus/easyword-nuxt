<template>
	<transition name="settings">
		<div class="header-settings" v-if="active">
			<div class="settings__content">
				<GlobalSwitch
					:activate="$i18n.locale === 'en'"
					:icons="[require('~/assets/images/icons/flags/pl.svg'), require('~/assets/images/icons/flags/en.svg')]"
					@changed="changeLang"
				/>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: "GlobalSettings",
		props: {
			active: Boolean,
		},
		data() {
			return {
				
			}
		},
		methods: {
			changeLang(value) {
				if (value) {
					this.$i18n.setLocale('en');
					this.$nuxt.$root.$loading.start()
				}
				else {
					this.$i18n.setLocale('pl');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header-settings {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		overflow: hidden;
		height: 100px;
		.settings__content {
			height: 100px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: $bg-secondary;
			padding: 20px;
		}
	}
	// animation
	.settings-enter-active,
	.settings-leave {
		opacity: 1;
		height: 100px;
	}
	.settings-leave-active,
	.settings-enter {
		opacity: 0;
		height: 0;
	}
	.settings-enter-active,
	.settings-leave-active {
		transition: 0.3s ease;
	}
</style>