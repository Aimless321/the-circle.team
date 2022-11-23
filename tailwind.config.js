/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-surface": "#121212",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
