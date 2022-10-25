const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'sans': ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
