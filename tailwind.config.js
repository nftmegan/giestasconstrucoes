const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			opacity: {
				'99': '.98',
			}
		},
	},
	plugins: [
		// ...
		require('@tailwindcss/aspect-ratio'),
	],
});