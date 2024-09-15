/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      jost: ["Jost", "sans-serif"],
      eduaus: ["Edu AU VIC WA NT Hand", "cursive"],
      sofadi: ["Sofadi One", "system-ui"]
    }
  },
  plugins: [],
}