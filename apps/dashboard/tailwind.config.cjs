// const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	safelist: [
		'w-64',
		'w-1/2',
		'rounded-l-lg',
		'rounded-r-lg',
		'bg-gray-200',
		'grid-cols-4',
		'grid-cols-7',
		'h-6',
		'leading-6',
		'h-9',
		'leading-9',
		'shadow-lg'
	],

	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'system-ui',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji'
				],
				body: [
					'Inter',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'system-ui',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji'
				],
				mono: [
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'Liberation Mono',
					'Courier New',
					'monospace'
				]
			},
			transitionProperty: {
				width: 'width'
			},
			textDecoration: ['active'],
			minWidth: {
				kanban: '28rem'
			},
			colors: {
				blue: {
					50: '#f1f8fe',
					100: '#e2f1fc',
					200: '#c0e1f7',
					300: '#88c9f1',
					400: '#48aee8',
					500: '#2094d7',
					600: '#1276b7',
					700: '#11639c',
					800: '#11507b',
					900: '#144366'
				},

				gray: colors.slate,
				green: colors.green
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};

module.exports = config;
