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
        primary: {DEFAULT:'#FDAF06',100:'#fee3a8', 200: '#fed376',300:'#fec64e', 400: '#fdbb2c', 500:'#f4a802', 600:'#de9902', 700: '#c18402', 800:'#ac7601', 900:'#785301'},
        secondary: '#FFFEF0',
        tertiary: '#04BA70',
        quaternary: '#262626',
        quinary: '#737373',
        senary: '#FAFAFA',
        septenary: '#525252',
        octonary: '#E5E5E5',
      },
      fontSize: {
        '2xs': "0.5rem",
      }
    },
  },
  plugins: [],
}
