/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
      'reading': '#778DA9',
    },},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}

