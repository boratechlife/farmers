/** @type {import("tailwindcss/defaultTheme")} */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "#359744",
        secondary: "#8AD23B",
        light: "#fafafa",
        success: {
          1: "#5B9051",
          2: "#E9FEEE",
        },
        gray: {
          1: "#8C8C8C",
        },
      },
    },
  },
  plugins: [],
};
