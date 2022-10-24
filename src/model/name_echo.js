import { randomFromArray } from '../util/rand.js'

const promptQuote = 'Please tell me your name.'
const randomQuoteTemplate = [
	'Hello, _!',
	'Hi, _!',
	'Good day, _!',
	'Nice to see you, _!',
	'Greetings, _!'
]

function getRandomQuoteTemplate() {
	return randomFromArray(randomQuoteTemplate)
}

function isValidName(name) {
	return name && name !== ''
}

export function echoName(name) {
	if (!isValidName(name)) {
		return promptQuote
	}
	let quoteTemplate = getRandomQuoteTemplate()
	return quoteTemplate.replace('_', name)
}