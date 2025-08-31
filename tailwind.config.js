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
        // 新的配色方案
        serene: {
          50: "#f8f9fa",
          100: "#f1f3f4",
          200: "#e3e6ea",
          300: "#c7d0d8",
          400: "#a8b5c2",
          500: "#8C9DAF", // 靜謐灰藍 - 主色調
          600: "#7a8a9a",
          700: "#64717f",
          800: "#525d68",
          900: "#444d56"
        },
        warm: {
          50: "#fefefe",
          100: "#fdfcfc",
          200: "#faf9f9",
          300: "#f5f4f4",
          400: "#f0efef",
          500: "#F7F7F7", // 溫暖白灰 - 背景色
          600: "#e8e7e7",
          700: "#d1d0d0",
          800: "#a8a7a7",
          900: "#8a8989"
        },
        ocean: {
          50: "#f2f4f6",
          100: "#e6e9ed",
          200: "#c0c9d4",
          300: "#9aa9bb",
          400: "#4C657A", // 深海藍 - 強調色
          500: "#3d5a6c",
          600: "#2f4a5d",
          700: "#253a4a",
          800: "#1c2d37",
          900: "#142025"
        },
        // 保留原有的品牌色彩作為輔助
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


