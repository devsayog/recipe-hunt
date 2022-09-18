/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mirza: ['Mirza', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
