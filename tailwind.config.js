/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./source/**/*.{html,erb}"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#282828',
        primary: '#F05A24',
      },
    },
  },
  plugins: [],
}