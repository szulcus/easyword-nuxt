<template>
	<div class="global-toasts">
		<transition-group name="toast" mode="in-out">
			<div class="toast" v-for="toast in $store.state.toasts" :key="toast.id">
				<img src="~/assets/images/logo/signet.svg" :alt="toast.message" class="toast__img">
				<!-- "`)" -->
				<!-- eslint-disable-next-line vue/no-parsing-error -->
				<span class="toast__message">
					{{ toast.message }}
				</span>
				<div
					class="toast__progress"
					:style="{'animation-duration': `${toast.delay - 600}ms`}"
				/>
			</div>
		</transition-group>
	</div>
</template>

<script>
	export default {
		name: "GlobalToasts",
	}
</script>

<style lang="scss" scoped>
	@keyframes timing {
		from {
			transform: scaleX(1);
		}
		to {
			transform: scaleX(0);
		}
	}
	.global-toasts {
		position: fixed;
		bottom: 30px;
		right: 30px;
		z-index: 999;
		.toast {
			height: 50px;
			position: relative;
			width: max-content;
			display: flex;
			align-items: center;
			border: 3px solid $bg-secondary;
			background-color: $bg-primary;
			overflow: hidden;
			padding: 0 10px;
			border-radius: 10px;
			margin: 6px 0 0 auto;
			.toast__img {
				width: 24px;
				height: 24px;
				margin-right: 10px;
			}
			.toast__message {
				text-transform: uppercase;
			}
			.toast__progress {
				position: absolute;
				bottom: 0px;
				left: 0;
				width: 100%;
				height: 3px;
				transform-origin: right;
				animation-name: timing;
				animation-fill-mode: both;
				animation-timing-function: linear;
				animation-delay: 0.3s;
				background-color: $decorative;
			}
		}
		.toast-leave-to,
		.toast-enter {
			opacity: 0;
			transform: translateY(100px);
		}
		.toast-enter-to,
		.toast-leave {
			opacity: 1;
			transform: translateY(0);
		}
		.toast-enter-active {
			transition: 0.3s ease;
		}
		.toast-leave-active {
			position: absolute;
			transform: translate(200%, calc(-100% - 6px));
			transition: 0.1s ease;
			z-index: -1;
		}
		.toast-move {
			transition: 0.3s ease;
		}
	}
</style>