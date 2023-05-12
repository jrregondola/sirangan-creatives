/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-img": "url('assets/hero-banner.png')",
      },
    },
    colors: {
      "primary-bg": "#313536",
      "secondary-bg": "#252829",
      "primary-text": "#FFFFFF",
      "secondary-text": "#CE8653",
      "card-bg": "#252829",
      "card-title": "#CF5F31",
    },
  },
  plugins: [],
};
