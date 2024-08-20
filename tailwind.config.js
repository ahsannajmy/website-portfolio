/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      boxShadow : {
        'navbar' : '0px 4px 4px 0px rgba(0,0,0,0.25)'
      },
      colors : {
        'main-color' : '#503D3F',
        'secondary-color' : '#EFE6DD',
        'hover-secondary' : '#D9C6B9',
        'card-color' : '#EBDDCF',
        'card-main-color' : '#604A4C'
      },
      fontSize : {
        'sm' : '12px',
        'sm-2' : '10px',
        'lg' : '48px',
        'lg-2' : '36px',
        'lg-3' : '28px',
        'md' : '15px'
      },
      dropShadow: {
        'lg': '0px 4px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

