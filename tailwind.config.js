/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        yellow: "#FFD43B",
        secondary: "#6b7280",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
