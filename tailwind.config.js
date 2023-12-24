/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:"#359744",
        secondary: "#8AD23B",
        'primary-light' : '#FAFDFF'
      },
      fontFamily : {
        Poppins:'Poppins'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}