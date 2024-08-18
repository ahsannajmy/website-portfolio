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
        'hover-secondary' : '#D9C6B9'
      },
      fontSize : {
        'sm' : '12px',
        'lg' : '48px',
        'md' : '15px'
      },
      dropShadow: {
        'lg': '0px 4px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

