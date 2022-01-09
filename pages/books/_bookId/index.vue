<template>
	<div class="book-view">
		<img
			class="book__img"
			:src="book.cover"
			:alt="book.title"
		/>
		<div class="book__separator" />
		<div class="book__content">
			<h1 class="content__title">Spis treści</h1>
			<div class="content__units">
				<div
					class="unit"
					v-for="(unit, i) in units"
					:key="unit.id"
				>
					<h2 class="unit__title">Rozdział {{ i + 1 }} - {{ unit.title }}</h2>
					<ul class="unit__parts">
						<nuxt-link
							class="part"
							v-for="part in unit.parts"
							:key="part.id"
							:to="localePath({
								name: 'books-bookId-gameId-unitId-partId', 
								params: {
									bookId: $route.params.bookId,
									gameId: 'easy-write',
									unitId: unit.id,
									partId: part.id
								}
							})"
						>
							<li class="part__item">
								<fa class="item__icon" icon="angle-right" />
								{{ part.name }}
							</li>
						</nuxt-link>
						<nuxt-link
							class="part"
							:to="localePath({
								name: 'books-bookId-gameId-unitId', 
								params: {
									bookId: $route.params.bookId,
									gameId: 'easy-write',
									unitId: unit.id,
								}
							})"
						>
							<li class="part__item">
								<fa class="item__icon" icon="graduation-cap" />
								Egzamin
							</li>
						</nuxt-link>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Book',
		async asyncData({ $fire, route }) {
			const book = await $fire.firestore.collection('books').doc(route.params.bookId).get('cover');
			const units = await $fire.firestore.collection('books').doc(route.params.bookId).collection('units').get();
			return {
				book: book.data(),
				units: units.docs.map(doc => doc.data())
			}
		},
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	.book-view {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.book__img {
			display: none;
			@media (min-width: 1024px) {
				display: block;
				width: 350px;
				height: 500px;
				object-fit: cover;
				border-radius: 20px;
			}
		}
		.book__separator {
			display: none;
			@media (min-width: 1024px) {
				display: block;
				width: 3px;
				height: 100%;
				margin: 0 30px;
				background-color: $decorative;
				clip-path: ellipse(50% 50% at 50% 50%);
			}
			@media (min-width: 1280px) {
				margin: 0 50px;
			}
		}
		.book__content {
			width: min(700px, 100%);
			.content__title {
				width: max-content;
				font-size: 2rem;
				margin: 0 auto 20px auto;
				@include line-bottom;
				&::first-letter {
					color: $decorative;
				}
				@media (min-width: 480px) {
					font-size: 2.25rem;
				}
			}
			.content__units {
				height: calc(100vh - 200px);
				@include scroll-y;
				@media (min-width: 1024px) {
					height: max(500px, calc(100vh - 200px));
				}
				.unit {
					.unit__title {
						font-size: 1.25rem;
					}
					.unit__parts {
						padding-left: 30px;
						margin: 20px 0;
						.part {
							width: fit-content;
							display: block;
							&:last-child {
								margin-left: 15px;
							}
							@include hover {
								.part__item {
									color: $text-primary;
								}
							}
							.part__item {
								margin: 5px 0;
								color: $text-secondary;
								transition: 0.2s ease;
								font-size: 1.125rem;
								.item__icon {
									color: $decorative;
									margin-right: 3px;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
