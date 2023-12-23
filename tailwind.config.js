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
      },
      colors: {
        primary: "#359744",
        secondary: "#8AD23B",
        tertiary: "#161E54",
        light: "#fafafa",
        "blue-gray": "#475467",

        dark: "#1c1c1c",
        success: {
          1: "#5B9051",
          2: "#E9FEEE",
          3: "#334C36",
        },
        gray: {
          1: "#8C8C8C",
          2: "#D0D0D0",
          3: "#B2B2B2",
          4: "#F1F1F1",
          5: "#CBCDCC",
          6: "#686868",
        },
      },
    },
  },
  plugins: [],
};
