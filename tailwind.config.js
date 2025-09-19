/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sorts Mill Goudy", "serif"],
        body: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        chinese: ["游明朝体", "YuMincho", "游明朝", "Yu Mincho", "Hiragino Mincho ProN W3", "HiraMinProN-W3", "Hiragino Mincho ProN", "Hiragino Mincho Pro", "HGS明朝 E", "MS PMincho", "serif"],
        nav: ["Sorts Mill Goudy", "serif"],
      },
      scale: {
        '120': '1.2',
      },
      colors: {
        brand: {
          50: "#faf8f6",
          100: "#f5f1ed",
          200: "#ede6de",
          300: "#e0d4c7",
          400: "#d1bfa8",
          500: "#b8956a",
          600: "#a68b5b",
          700: "#9d7f4f",
          800: "#8a6f42",
          900: "#735d37"
        },
        primary: {
          50: "#faf8f6",
          100: "#f5f1ed",
          200: "#ede6de",
          300: "#e0d4c7",
          400: "#d1bfa8",
          500: "#b8956a",
          600: "#a68b5b",
          700: "#9d7f4f",
          800: "#8a6f42",
          900: "#735d37"
        },
        button: "#B8956A",
        hero: "#F5F3F1",
        background: "#F8F6F4",
        ink: "#A68B5B",
        sand: {
          50: "#faf8f6",
          100: "#f5f3f1",
          200: "#f0ede9"
        }
      }
    }
  },
  plugins: []
};


