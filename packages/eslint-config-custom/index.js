module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'turbo', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	rules: {
		// tweak custom rules here
		// "@next/next/no-html-link-for-pages": "off",
		// "react/jsx-key": "off",
	},
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
}
