/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        romantic: ["Pinyon Script", "cursive"],
        fancy: ["Rouge Script", "cursive"],
        soft: ["Cedarville Cursive", "cursive"],
        handwritten: ["Bad Script", "cursive"],
      },
    },
  },   // ✅ This closes theme properly
  plugins: [],
}
