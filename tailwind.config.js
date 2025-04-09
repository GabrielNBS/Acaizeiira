/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "var(--color-primary)"
      },
      fontFamily: {
        'comfortaa': ["Comfortaa", "sans-serif"],
      },
    },
  },
  variants:{},
  plugins: [],
};
