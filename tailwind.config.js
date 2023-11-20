/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "techit-main": "#e67800",
        "techit-gray": {
          100: "#a3a3a3",
          300: "#222222",
          200: "#737373",
        },
      },
    },
  },
  plugins: [],
};
