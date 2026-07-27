/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        bgRaised: '#0b0c0b',
        accent: '#5cff8a',
        accentDim: '#2a7a45',
        deepRed: '#7a1f1f',
        soft: '#9a9a9a',
        softer: '#666666',
        line: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
