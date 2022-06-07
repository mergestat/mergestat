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
        samantic: {
          header: '#111827',
          text: '#374151',
          mutedText: '#727C8D',
          mutedIcon: '#9CA3AF',
          border: '#E5E7EB',
          icon: '#6B7280',
          danger: '#DC2626',
          success: '#10B981',
        },
        gray: {
          150: "#EBECEF",
          450: "#727C8D"
        },
      },
      fontFamily: {
        'sans': ['"Inter UI"', 'ui-sans-serif', 'system-ui'],
        'monaco': ['Monaco'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
      },
      gridTemplateRows: {
        'content-layout': 'auto 1fr',
      },
      minHeight: {
        40: '10rem',
      },
      width: {
        1.5: '6px',
        3.5: '14px',
        4.5: '18px',
        100: '25rem',
        150:'37.5rem',
        200:'50rem',
      },
      height: {
        1.5: '6px',
        3.5: '14px',
        4.5: '18px',
        84: '21rem',
      },
      margin: {
        0.5: '2px',
      },
      lineHeight: {
        '20': '5rem',
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
      yellow: colors.amber,
      white: colors.white,
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
  plugins: [],
  separator: '_',
}
