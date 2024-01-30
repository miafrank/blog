/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    backgroundImage: {
      'gradient': "url('../src/images/gradient.svg')",
      'header': "url('../src/images/Home.png')",
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}