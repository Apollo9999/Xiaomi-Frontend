/** @type {import('tailwindcss').Config} */
const { url } = require('inspector');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // website_bg: 'url(../public/assets/website-bg.png)',
        // pattern: 'url(../public/assets/turtle-pattern.png)',
        // avtar: 'url(../public/assets/website/avtar.webp)',
      },
    },
    colors: {
      white: '#FFF',
      blueish: '#125F83',
      blue: '#1D095F',
      lightblue: '#9FE4FF',
      lightgrey: '#e5e7eb',
      whiteish: '#f5f5f5',
      sand: '#E7C7B4',
      greyish: '#F8F8F8',
      purple: '#4E2672',
      orange: '#ff6700',
      purpleish: '#C2CCF1',
    },
  },
  fontSize: {},
  plugins: [],
};
