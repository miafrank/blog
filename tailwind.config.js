/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    backgroundImage: {
      // gradient: "url('../src/images/gradient.svg')",
      gradient: "url('../src/images/pattern.svg')",
      header: "url('../src/images/Home.png')"
    },
    colors: {
      aqua: '#58E4E0',
      'tiffany-blue': '#7ED8E0',
      'royal-blue': '#294EA0',
      'hot-pink': '#F766A0'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    container: {
      center: true
    },
    extend: {}
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
