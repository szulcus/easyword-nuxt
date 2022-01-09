<template>
	<GameLanguageSetter
		v-if="!languages.native || !languages.foreign"
		:languages="['pl', 'en']"
		@select-languages="selectLanguages"
	/>
	<div v-else class="game-easy-write-component">
		<div class="game__info">
			<h2 class="info__cathegory">{{ cathegory }}</h2>
			<div class="info__achievements">
				<div class="achievement">
					Punkty: <strong class="achievement__value">{{ points }}</strong>
				</div>
				<div class="achievement achievement--languages">
					<img class="achievement__img" :src="require(`~/assets/images/icons/flags/${languages.native}.svg`)" :alt="languages.native">
					<fa class="achievement__icon" icon="long-arrow-alt-right" />
					<img class="achievement__img" :src="require(`~/assets/images/icons/flags/${languages.foreign}.svg`)" :alt="languages.foreign">
				</div>
				<div class="achievement">
					Poziom: <strong class="achievement__value">{{ level }}</strong>
				</div>
			</div>
		</div>
		<div class="game__word">
			<strong class="word__definition">{{ $wordsToString(gameWords[0][languages.native]) }}</strong>
			<img v-if="loadedImg" class="word__img" :src="gameWords[0].img" alt="" />
			<div v-else class="word__img word__img--loading">
				<Loader />
			</div>
			<div class="word__input">
				<div class="input__progress" :style="{ width: `${(goodAnswers.length / words.length) * 100}%` }" />
				<input ref="input" @input="checkWord" type="text" class="input__item" placeholder="Wpisz tłumaczenie" />
			</div>
		</div>
		<div class="game__nav">
			<div class="nav__controls">
				<div class="control">
					<fa icon="eye" />
					<div class="control__count">{{ previews }}</div>
				</div>
				<div :class="['control', { 'control--active': !strictMode }]">
					<fa icon="magic" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Loader from '~/components/misc/Loader.vue';
	import GameLanguageSetter from '~/components/games/LanguageSetter.vue';

	import latinize from 'latinize';
	import { shuffle } from 'fast-shuffle';

	export default {
		name: 'EasyWrite',
		components: {
			Loader,
			GameLanguageSetter,
		},
		props: {
			words: {
				type: Array,
				required: true,
			},
			cathegory: {
				type: String,
				required: true,
			}
		},
		data() {
			return {
				languages: {
					native: '',
					foreign: ''
				},
				strictMode: false,
				goodAnswers: [],
				gameWords: shuffle(this.words),
				loadedImg: false,
				previews: 12,
				points: 0,
				level: 1,
			};
		},
		mounted() {
			this.loadImg();
		},
		computed: {
			correctWords() {
				return this.$wordsToArray(this.gameWords[0][this.languages.foreign]).map(word => latinize(word.toLowerCase()));
				// return this.$wordsToArray(['owdowiał_y_a'])
			}
		},
		methods: {
			selectLanguages(native, foreign) {
				function testLog(_e) {
					console.log(_e);
				}
				testLog('test')
				if (native === foreign) {
					this.$toastNotification({ message: 'Język ojczysty nie może być językiem obcym', delay: 4000 });
					return;
				}
				this.languages.native = native;
				this.languages.foreign = foreign;
			},
			loadImg() {
				const img = new Image();
				img.src = this.gameWords[0].img
				img.onload = () => this.loadedImg = true;
				img.onerror = () => this.loadedImg = true;
			},
			checkWord(e) {
				const phrase = latinize(e.target.value.toLowerCase().trimLeft());
				console.log(phrase, this.correctWords);
				if (this.correctWords.includes(phrase)) {
					// Give a reward
					this.points += 1;
					// Prepare the next word
					this.$refs.input.value = '';
					this.gameWords.shift();
					this.loadedImg = false;
					this.loadImg()
				}
			},
		}
	};
</script>

<style lang="scss" scoped>
	.game-easy-write-component {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		.game__info {
			width: 100%;
			.info__cathegory {
				margin-bottom: 10px;
				font-weight: normal;
				font-size: 1.25rem;
				text-transform: uppercase;
				color: $text-secondary;
			}
			.info__achievements {
				display: flex;
				justify-content: space-between;
				font-size: 1.25rem;
				color: $text-secondary;
				.achievement {
					.achievement__value {
						color: $decorative;
					}
				}
				.achievement--languages {
					display: flex;
					align-items: center;
					.achievement__img {
						width: 20px;
						height: 20px;
					}
					.achievement__icon {
						margin: 0 5px;
					}
				}
			}
		}
		.game__word {
			width: 100%;
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 20px 0;
			.word__definition {
				width: 100%;
				font-size: 1.125rem;
				@include ellipsis;
			}
			.word__img {
				width: min(600px, 100%);
				height: min(400px, 70vw, calc(100vh - 350px));
				object-fit: cover;
				background-color: $bg-secondary;
				border-radius: 20px;
				margin: 15px 0;
			}
			.word__img--loading {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.word__input {
				position: relative;
				width: min(500px, 100%);
				border-radius: 20px;
				overflow: hidden;
				.input__item {
					width: 100%;
					// background-color: red;
					background-color: rgb($text-highlighted, 0.8);
					border: none;
					font-size: 1rem;
					padding: 5px 10px;
					color: $bg-highlighted;
					outline: none;
					text-align: center;
				}
				.input__progress {
					position: absolute;
					top: 0;
					left: 0;
					width: 30%;
					height: 100%;
					background-color: $text-highlighted;
					z-index: -1;
				}
			}
		}
		.game__nav {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.nav__controls {
				display: flex;
				.control {
					position: relative;
					margin: 10px;
					font-size: 20px;
					transition: 0.2s ease;
					@include hover {
						opacity: 0.7;
					}
					.control__count {
						position: absolute;
						top: -8px;
						left: 16px;
						font-size: 10px;
						font-weight: bold;
						background-color: $bg-highlighted;
						padding: 3px 5px;
						border-radius: 5px;
						color: $decorative;
					}
				}
				.control--active {
					color: $decorative;
				}
			}
		}
	}
</style>
