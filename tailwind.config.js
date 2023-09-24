/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['inter var', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
