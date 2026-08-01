import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#fffaf7',
				'secondary-background': '#fff0ea',
				'card-background': '#ffffff',
				primary: '#f26752',
				secondary: '#ffded6',
				accent: '#2555d9',
				success: '#22c55e',
				warning: '#f59e0b',
				danger: '#ef4444',
				'text-primary': '#17202b',
				'text-secondary': '#667085',
				border: '#f0e5df'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				outfit: ['Outfit', 'sans-serif']
			},
			boxShadow: {
				'card': '0 8px 24px rgba(46, 32, 25, 0.06)',
				'card-hover': '0 18px 35px rgba(46, 32, 25, 0.12)',
				'glow': '0 12px 30px rgba(242, 103, 82, 0.24)',
				'inset-button': 'inset 0 1px 0 rgba(255, 255, 255, 0.8)'
			}
		}
	},
	plugins: []
} satisfies Config;
