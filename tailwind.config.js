/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6B33D4",
        textMain: "#1A1A1A",
        textSub: "#666666",
        bgMain: "#F8F9FA",
        bgCard: "#FFFFFF",
        cardBlue: "#49397e",
        cardYellow: "#fbbf24",
        cardGreen: "#22c55e"
      },
      fontFamily: {
        // You'll need to load these fonts
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}
