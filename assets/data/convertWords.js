const words = require('~/assets/data/words.json');
const newWords = {
	info: words.info,
	units: [
		words.unit_01,
		words.unit_02,
		words.unit_03,
		words.unit_04,
		words.unit_05,
		words.unit_06,
		words.unit_07,
		words.unit_08,
		words.unit_09,
		words.unit_10,
		words.unit_11,
		words.unit_12,
		words.unit_13,
		words.unit_14,
	].map(unit => ({
		title: unit.title,
		parts: Object.values(unit.parts).map(part => ({
			name: part.name,
			words: Object.values(part.words).map(word => ({
				img: word.image,
				obligatory: word.level === 'basic',
				en: [...[word.word1, word.word2, word.word3, word.word4, word.word5]].filter(w => w !== undefined),
				pl: [...[word.translation1, word.translation2, word.translation3, word.translation4, word.translation5]].filter(w => w !== undefined).map(w => word.female === 'yes' ? `${w.slice(0, -1)}_${w.slice(-1)}_a` : w),
				...(word.female && word.female !== 'yes' ? { female: word.female } : {})
			})),
		})),
	}))
};
console.log(newWords);