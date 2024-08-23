/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      'red-shadow': '0 4px 8px 0 rgba(255, 0, 0, 0.2)',
      'green-shadow': '0 4px 8px 0 rgba(0, 255, 0, 0.2)',
    },
    extend: {
      fontFamily: {
        myFont: ['Oswald'],
      },
      width:{
        widgetWidth: '466px',
      },
      colors:{
        headerbg: '#D6EFD8',
        headertext: '#1A5319'
      }
    },
  },
  plugins: [],
}