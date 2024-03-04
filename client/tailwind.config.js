/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#fabb18',
        'custom-light-yellow' : '#FFF9ED'
      },
    },
  },
  plugins: [],
};
