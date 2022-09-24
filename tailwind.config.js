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
        bgMain: 'var(--bgMain)',
        textMain: 'var(--textMain)',
        beigeMain: 'var(--beigeMain)',
        beigeOpacity: 'var(--beigeOpacity)',
        blueOpacity: 'var(--blueOpacity)',
        beigeOther: 'var(--beigeOther)',
        'regular-1': 'var(--regular-1)',
      },
      fontFamily: {
        newYork: ['NewYork', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        smallVery: '0.03rem',
      },
      fontSize: {
        'sm': '0.938rem',
        '2.5xl': '1.625rem',
        '6xl': [
          '3.5rem',
          {
            lineHeight: '68px',
          }
        ],
        'title1': [
          '3.9rem',
          {
            lineHeight: '77px',
          }
        ]
      },
      margin: {
        '5px': '5px',
      }
    },
  },
  variants: {
    extend: {
      margin: ['responsive', 'hover', 'first', 'last'],
    },
  },
  plugins: [],
};
