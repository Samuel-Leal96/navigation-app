/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        primary: '#49129C',
        secondary: {
          DEFAULT: '#B40086',
          100: '#C51297',
          200: '#831266',
        },
        tertiary: '#EF2967'
      },

      fontFamily: {
        'roboto-black': ['Roboto-Black', 'sans-serif'],
        'roboto-light': ['Roboto-Light', 'sans-serif'],
        'roboto-medium': ['Roboto-Medium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
