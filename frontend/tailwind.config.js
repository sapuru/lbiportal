/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./src/**/*.{js,ts,jsx,tsx}",
				'./src/app/**/*.{js,ts,jsx,tsx}',
	 ], 
	theme: { 
		extend: {
			fontFamily:{
				sans:['var(--font-AASmart)'],
			},
			colors: {
				'AABlue': '#031794',
				'AASmartBlue': '#167EC2',
				'AARed': '#E73918',
				'AAorange': '#F4940E',
				'AAgreen': '#93C244',
				'AAyellow': '#FCE803',
				'AAceleste': '#61C2D6',
				'AApurple': '#732282',
				'AAmagenta': '#B21180',
			  },
		}, 
	}, 
	plugins: [], 
}