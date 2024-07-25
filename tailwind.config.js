/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    backgroundImage: {
      gradient: "url('../src/images/pattern.svg')",
      header: "url('../src/images/Home.png')",
      card_image_1: "url('../src/images/card_image_1.png')",
      card_image_2: "url('../src/images/card_image_2.png')",
      card_image_3: "url('../src/images/card_image_3.png')",
      card_image_4: "url('../src/images/card_image_4.png')"
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
