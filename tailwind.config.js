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
        display: ["Cormorant Garamond", "serif"],
        body: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        chinese: ["Noto Sans TC", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#fef7f3",
          100: "#fdeee6",
          200: "#fbd9c8",
          300: "#f8bda0",
          400: "#f49a6e",
          500: "#f0753a",
          600: "#e55a1f",
          700: "#c0441a",
          800: "#9a371b",
          900: "#7d301a"
        },
        primary: {
          50: "#fef7f3",
          100: "#fdeee6",
          200: "#fbd9c8",
          300: "#f8bda0",
          400: "#f49a6e",
          500: "#f0753a",
          600: "#e55a1f",
          700: "#c0441a",
          800: "#9a371b",
          900: "#7d301a"
        },
        button: "#6D3B07",
        hero: "#FFCA99",
        background: "#E0C3A9",
        ink: "#1f2937",
        sand: {
          50: "#faf7f6",
          100: "#f4eeec",
          200: "#ece4e2"
        }
      }
    }
  },
  plugins: []
};


