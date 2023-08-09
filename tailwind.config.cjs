/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FDAF06',
        secondary: '#FFFEF0',
        tertiary: '#04BA70',
        quaternary: '#262626',
        quinary: '#737373',
        senary: '#FAFAFA'
      },
      fontSize: {
        '2xs': "0.5rem",
      }
    },
  },
  plugins: [],
}
