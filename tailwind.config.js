const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./public/**/*.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
		// './node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			extend: {
				fontFamily: {
					sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};
