/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{css,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        booGalo: ['BooGalo', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'], // Add the custom font here
      },
    },
  },
  plugins: [],
}
