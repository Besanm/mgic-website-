/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#047857',
          700: '#065f46',
          400: '#34d399',
        },
      },
    },
  },
  plugins: [],
};
