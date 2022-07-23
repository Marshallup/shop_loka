/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.scss',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        bgMain: 'rgb(234,234,234)',
        textMain: '#564D42',
        beigeMain: 'rgb(216,208,200)',
        beigeOpacity: '#584F43',
        blueOpacity: '#E3E3E3',
      },
      fontFamily: {
        newYork: ['NewYork', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        smallVery: '0.03rem',
      },
      fontSize: {
        '2.5xl': '1.625rem',
        '6xl': '3.5rem',
      },
    },
  },
  variants: {
    extend: {
      margin: ['responsive', 'hover', 'first', 'last'],
    },
  },
  plugins: [],
};
