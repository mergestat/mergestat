const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@mergestat/blocks/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [/w-\d\/\d/, "md_w-1/2", /^w-/, /^h-/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          150: "#EBECEF",
        },
      },
      gridTemplateRows: {
        "content-layout": "auto 1fr",
      },
      minHeight: {
        40: "10rem",
      },
      height: {
        84: '21rem',
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
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
      backgroundColor: ["active"],
      backgroundImage: ["active"],
      boxShadow: ["active"],
      gradientColorStops: ["active"],
    },
  },
  plugins: [],
  separator: "_",
};
