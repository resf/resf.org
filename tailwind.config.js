/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/locales/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#b7ead9",
          100: "#88dcc0",
          200: "#58cea7",
          300: "#40c79a",
          400: "#28c08e",
          500: "#10b981",
          600: "#0d9467",
          700: "#0a6f4d",
          800: "#064a34",
          900: "#03251a",
        },
      },
      fontFamily: {
        display: ["Red Hat Display", "sans-serif"],
        sans: ["Red Hat Text", "sans-serif"],
        mono: ["Red Hat Mono", "mono"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
