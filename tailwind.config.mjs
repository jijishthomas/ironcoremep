/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.25rem',
				lg: '2rem',
				xl: '3rem'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"Public Sans"', '"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
			},
			colors: {
				brand: {
					DEFAULT: '#C1252D',
					dark: '#9F1A21',
					soft: '#FCEEEF'
				},
				steel: {
					900: '#111827',
					800: '#1F2937',
					700: '#374151',
					600: '#4B5563',
					500: '#6B7280',
					200: '#E5E7EB',
					100: '#F3F4F6',
					50: '#F9FAFB'
				}
			},
			boxShadow: {
				shell: '0 20px 40px rgba(17, 24, 39, 0.08)',
				card: '0 10px 25px rgba(17, 24, 39, 0.08)'
			}
		}
	},
	plugins: []
};
