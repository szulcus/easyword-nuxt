<template>
	<header class="header" v-click-outside="closeSettings">
		<nav class="nav-component">
			<nuxt-link class="nav__logo" to="/">
				<img src="~/assets/images/logo/signet.svg" alt="Logo" class="logo__img">
			</nuxt-link>
			<!-- <transition-group name="list" tag="ul" class="nav__list">
				<li key="home" ref="index" class="list__item">
					<nuxt-link class="item__link" :to="localePath('index')" exact>
						<fa icon="home"/>
					</nuxt-link>
				</li>
				{{ localePath('chats') }}
				<li key="profiles" ref="profiles" class="list__item">
					<nuxt-link class="item__link" :to="localePath({name: 'profiles-id', params: { id: 'jakub104' }})">
						<fa icon="user"/>
					</nuxt-link>
				</li>
				<li key="chats" ref="chats" class="list__item">
					<nuxt-link class="item__link" :to="localePath('chats')">
						<fa icon="comment"/>
					</nuxt-link>
				</li>
				<li key="games" ref="games" class="list__item">
					<nuxt-link class="item__link" :to="localePath('games')">
						<fa icon="gamepad"/>
					</nuxt-link>
				</li>
				<li key="settings" class="list__item">
					<div class="item__settings" @click="settingsOpened = !settingsOpened">
						<fa icon="cog"/>
					</div>
				</li>
			</transition-group> -->
			<div class="line" :style="{left: `${lineMoved}px`, width: `${lineWidth}px`}"/>
		</nav>
		<!-- <HeaderSettings :active="settingsOpened" /> -->
	</header>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				lineMoved: 0,
				lineWidth: 0,
				settingsOpened: false,
			}
		},
		watch:{
			// $route(to){
			// 	console.log(to);
			// 	const routeName = to.name.split('___')[0].split('-')[0]
			// 	const element = this.$refs[routeName]
			// 	console.log(element)
			// 	if (element) {
			// 		const {left, width} = element.getBoundingClientRect()
			// 		this.lineMoved = left
			// 		this.lineWidth = width
			// 	}
			// 	else if (to.name === 'NotFound') {
			// 		this.lineMoved = 0
			// 		this.lineWidth = 0
			// 	}
			// }
		},
		mounted() {
			// console.log(this.$route)
			// const routeName = this.$route.name.split('___')[0].split('-')[0];
			// this.lineMoved = this.$refs[routeName].getBoundingClientRect().left
			// this.lineWidth = this.$refs[routeName].getBoundingClientRect().width
			// window.addEventListener("resize", () => {
			// 	const routeName = this.$route.name.split('___')[0];
			// 	const element = this.$refs[routeName];
			// 	if (element) {
			// 		const {left, width} = element.getBoundingClientRect()
			// 		this.lineMoved = left
			// 		this.lineWidth = width
			// 	}
			// });
		},
		methods: {
			closeSettings() {
				this.settingsOpened = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		position: sticky;
		top: 0;
		width: 100%;
		background-color: $bg-secondary;
		padding: 0 20px;
		z-index: 2;
	}
	.nav-component {
		position: relative;
		width: 100%;
		height: 70px;
		max-width: 1000px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin: 0 auto;
		z-index: 2;
		.nav__logo {
			position: relative;
			height: 70%;
			.logo__img {
				height: 70%;
			}
		}
		.nav__list {
			display: flex;
			align-items: center;
			list-style: none;
			padding: 0;
			margin: 10px 0;
			.list__item {
				font-size: 20px;
				cursor: pointer;
				margin: 0 10px;
				.item__link {
					color: $text-primary;
					text-decoration: none;
					transition: all 0.2s ease;
					@include hover {
						color: $decorative;
					}
				}
				.nuxt-link-active {
					color: $decorative;
					font-weight: bold;
				}
				.item__settings {
					position: relative;
					background-color: $decorative;
					width: 35px;
					height: 35px;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50%;
					/* border: 3px solid $decorative; */
					color: $bg-secondary;
					.settings__panel {
						position: absolute;
						top: calc(100% + 20px);
						right: 0;
						width: 200px;
						height: 300px;
						border: 3px solid $decorative;
						border-radius: 10px 10px;
						background-color: $bg-primary;
						z-index: 2;
					}
				}
			}
		}
		.list-enter-from,
		.list-leave-to {
			opacity: 0;
			transform: scale(0.9);
		}
		.list-enter-to,
		.list-leave-from {
			opacity: 1;
			transform: scale(1);
		}
		.list-enter-active,
		.list-leave-active {
			transition: 0.3s ease;
		}
		.line {
			position: fixed;
			top: 58px;
			width: 100px;
			height: 3px;
			display: flex;
			background-color: $decorative;
			transition: all 0.5s ease;
			animation: opacity 0.3s 2s both;
			border-radius: 1px;
		}
	}
</style>