const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
      './node_modules/@mergestat/blocks/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: [/w-\d\/\d/, 'md_w-1/2', /^w-/, /^h-/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          150: '#EBECEF',
          250: '#DDDFE4',
          350: 'B9C0CB',
          450: '#727C8D'
        },
      },
      fontFamily: {
        sans: ['"Inter UI"', 'ui-sans-serif', 'system-ui'],
        display: ['"Cal Sans"'],
        mono: ['Monaco', 'ui-monospace', 'SFMono-Regular'],
      },
      gridTemplateRows: {
        'content-layout': 'auto 1fr',
      },
      minHeight: {
        xs: '18rem',
        sm: '24rem',
      },
      minWidth: {
        sm: '24rem',
      },
      width: {
        1.5: '6px',
        3.5: '14px',
        4.5: '18px',
        100: '25rem',
        150: '37.5rem',
        200: '50rem',
      },
      height: {
        1.5: '6px',
        3.5: '14px',
        4.5: '18px',
        64: '4rem',
        84: '21rem',
        720: '45rem',
      },
      margin: {
        0.5: '2px',
      },
      lineHeight: {
        20: '5rem',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      green: colors.emerald,
      lime: colors.lime,
      red: colors.red,
      blue: colors.sky,
      indigo: colors.indigo,
      yellow: colors.amber,
      white: colors.white,
      purple: colors.purple,
      teal: colors.teal,
      pink: colors.pink
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundImage: ['active'],
      boxShadow: ['active'],
      gradientColorStops: ['active'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  separator: '_',
}
