/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        container:"1440px"
      },
      fontFamily:{
        titleFont:'Roboto',
        bodyFont:'Poppins',
        logoFont:'Anton'
      }
    },
  },
  plugins: [],
}