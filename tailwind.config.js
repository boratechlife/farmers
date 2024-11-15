/** @type {import("tailwindcss/defaultTheme")} */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.serif],
        roboto: ["Roboto", ...defaultTheme.fontFamily.serif],
        overpass: ["Overpass", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary:"#359744",
        'primary-light' : '#FAFDFF',
        secondary: { DEFAULT: "#8AD23B", 100: "#FFC01E" },
        tertiary: { DEFAULT: "#161E54", 1: "#111827" },
        light: "#fafafa",
        "blue-gray": { DEFAULT: "#475467", 1: "#1D2939", 2: "#101828" },

        dark: "#1c1c1c",
        error: {
          1: "#FFEFE7",
          2: "#FF5151",
        },
        success: {
          DEFAULT: "#289643",
          1: "#5B9051",
          2: "#E9FEEE",
          3: "#334C36",
          4: "#027A48",
          5: "#12B76A",
        },
        gray: {
          1: "#8C8C8C",
          2: "#D0D0D0",
          3: "#B2B2B2",
          4: "#F1F1F1",
          5: "#CBCDCC",
          6: "#686868",
          7: "#9A9A9A",
          8: "#F9FAFB",
          9: "#6B7280",
          10: "#4C4D4D",
          11: "#344054",
          12: "#FAFAFA",
          13: "#BFBFD9",
        },

        light: "#fafafa",
        "blue-gray": "#475467",
      },
      fontFamily : {
        Poppins:'Poppins'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
