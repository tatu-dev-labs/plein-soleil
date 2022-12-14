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
      backgroundImage: {
        'villas-hero': "url('/images/villas-hero.png')",
        'video-cover': "url('/images/villas-video-cover.png')",
      }
    },
  },
  plugins: [],
}