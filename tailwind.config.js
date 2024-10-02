/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "main-color": "#0D1B2A",
        "secondary-color": "#FFFCF2",
      },
      keyframes: {
        slideUp: {
          "0%": {
            transform: "translateY(50%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideRight: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        slideUp: "slideUp 1.5s forwards",
        slideRight: "slideRight 1.5s forwards",
        slideLeft: "slideLeft 1.5s forwards",
      },
    },
  },
  plugins: [],
};
