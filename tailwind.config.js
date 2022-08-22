/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        grayishBlue: 'hsl(237, 18%, 59%)',
        softRed: 'hsl(345, 95%, 68%)',
        darkBlue1: 'hsl(236, 21%, 26%)',
        darkBlue2: 'hsl(235, 16%, 14%)',
        darkBlue3: 'hsl(234, 17%, 12%)',
      },
      fontFamily: {
        sans: ['Red Hat Text', 'sans-serif']
      }
    },
  },
  plugins: [],
}
