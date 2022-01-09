<template>
	<div class="languages-wrapper">
		<div :class="['select', {active}]" @click="active = !active" v-click-outside="closeSelect">
			<img class="flag" :src="selected.img" :alt="selected.content">
			{{ selected.content }}
			<fa class="icon" icon="angle-down" />
		</div>
		<div class="options-container">
			<div
				:class="['option', {selected: selected.content === option.content}]"
				v-for="(option) in options"
				:key="option.content"
				@click="selectOption(option.content)"
			>
				<label class="label">
					{{ option.content }}
				</label>
				<img class="flag" :src="option.img" :alt="option.content">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Languages",
		props: {
			options: {
				type: Array,
				required: true,
			},
			selected: {
				type: Object,
				required: true,
			}
		},
		data() {
			return {
				active: false,
				langs: ['pl', 'en', 'de', 'ru', 'fr', 'es', 'it', 'cz'],
			}
		},
		methods: {
			selectOption(option) {
				this.$emit('select', option);
				// this.active = false;
			},
			closeSelect() {
				this.active = false;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.languages-wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100px;
		text-transform: uppercase;
		font-weight: bold;
		letter-spacing: 1px;
		.select {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: $bg-secondary;
			border-radius: 10px;
			padding: 10px 40px 10px 10px;
			cursor: pointer;
			.icon {
				position: absolute;
				top: 50%;
				right: 10px;
				font-size: 20px;
				transform: translateY(-50%);
				transition: transform 0.4s ease;
			}
		}
		.active {
			.icon {
				transform: translateY(-50%) rotate(180deg);
			}
			& ~ .options-container {
				max-height: 220px;
				opacity: 1;
				overflow-y: scroll;
				&::-webkit-scrollbar{
					width: 0px;
				}
			}
		}
		.options-container {
			position: absolute;
			top: 45px;
			left: 0;
			width: 100%;
			max-height: 0px;
			opacity: 0;
			background-color: $bg-secondary;
			transition: all 0.4s ease;
			border-radius: 10px;
			overflow: hidden;
			z-index: 2;
			.option {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 10px 20px;
				transition: all 0.2s ease;
				cursor: pointer;
				&:hover {
					background-color: $bg-tertiary;
				}
				.label {
					cursor: pointer;
				}
				.radio {
					display: none;
				}
			}
			.selected {
				background-color: var(--lang-selected);
			}
		}
		.flag {
			width: 20px;
			height: 20px;
		}
	}
</style>