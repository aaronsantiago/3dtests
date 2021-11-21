module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: { 
        'gradient-radial': 'radial-gradient(ellipse closest-side at center, var(--tw-gradient-stops))', 
        'gradient-radial-at-t': 'radial-gradient(ellipse closest-side at top, var(--tw-gradient-stops))', 
        'gradient-radial-at-b': 'radial-gradient(ellipse closest-side at bottom, var(--tw-gradient-stops))', 
        'gradient-radial-at-l': 'radial-gradient(ellipse closest-side at left, var(--tw-gradient-stops))', 
        'gradient-radial-at-r': 'radial-gradient(ellipse closest-side at right, var(--tw-gradient-stops))', 
        'gradient-radial-at-tl': 'radial-gradient(ellipse closest-side at top left, var(--tw-gradient-stops))', 
        'gradient-radial-at-tr': 'radial-gradient(ellipse closest-side at top right, var(--tw-gradient-stops))', 
        'gradient-radial-at-bl': 'radial-gradient(ellipse closest-side at bottom left, var(--tw-gradient-stops))', 
        'gradient-radial-at-br': 'radial-gradient(ellipse closest-side at bottom right, var(--tw-gradient-stops))', 
      },
      fontFamily: {
        'cabinet': ['"Cabinet Grotesk"', 'sans-serif'],
        'plex': ['"IBM Plex Mono"', 'monospace'],
        'plex-sans': ['"IBM Plex"', 'sans-serif'],
        'work-sans': ['"Work Sans"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
	plugins: [require('tailwindcss-scroll-snap')],
}
