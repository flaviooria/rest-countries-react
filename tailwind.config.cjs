/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        'dark-background': '#202c37',
        'dark-text': '#fff',
        'dark-inputs': '#858585',
        'white-background': '#fafafa'
      },
      fontSize: {
        title: "24px",
      },
    },
  },
  plugins: [],
};
