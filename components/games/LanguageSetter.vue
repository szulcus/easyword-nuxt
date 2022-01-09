<template>
	<div class="language-setter-component">
		<div class="language-setter__part">
			<label class="part__name">Język ojczysty:</label>
			<SelectOption
				:options="languagesOptions"
				:selected="{ content: nativeLanguage, img: require(`~/assets/images/icons/flags/${nativeLanguage}.svg`) }"
				@select="(lang) => setLanguage('native', lang)"
			/>
		</div>
		<div class="language-setter__part">
			<label class="part__name">Język obcy:</label>
			<SelectOption
				:options="languagesOptions"
				:selected="{ content: foreignLanguage, img: require(`~/assets/images/icons/flags/${foreignLanguage}.svg`) }"
				@select="(lang) => setLanguage('foreign', lang)"
			/>
		</div>
		<ContentButton @click="$emit('select-languages', nativeLanguage, foreignLanguage)">
			Zatwierdź
		</ContentButton>
	</div>
</template>

<script>
	import ContentButton from '~/components/misc/ContentButton.vue';
	import SelectOption from '~/components/misc/SelectOption.vue';
	// 'C:\Users\jakub\Desktop\PROGRAMOWANIE\# EasyLearn\easy-word-nuxt\components\misc\ContentButton.vue'

	export default {
		name: 'LanguageSetter',
		components: {
			ContentButton,
			SelectOption,
		},
		props: {
			languages: {
				type: Array,
				required: true,
			},
		},
		computed: {
			languagesOptions() {
				return this.languages.map((lang) => ({ content: lang, img: require(`~/assets/images/icons/flags/${lang}.svg`) }))
			},
		},
		data() {
			return {
				nativeLanguage: this.languages[0],
				foreignLanguage: this.languages[1],
			}
		},
		methods: {
			setLanguage(type, lang) {
				this[`${type}Language`] = lang;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.language-setter-component {
		position: absolute;
		inset: 0;
		background-color: $bg-primary;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 2;
		.language-setter__part {
			display: flex;
			align-items: center;
			margin-bottom: 20px;
			.part__name {
				text-transform: uppercase;
				color: $text-secondary;
				margin-right: 10px;
			}
		}
	}
</style>
