/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'erox-purple': '#4A3A7A',
        'erox-yellow': '#FFD700',
      },
    },
  },
  plugins: [],
}