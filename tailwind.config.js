const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Coustard', ...defaultTheme.fontFamily.serif],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#f56565',
      }
    },
  },
  plugins: [],
}
