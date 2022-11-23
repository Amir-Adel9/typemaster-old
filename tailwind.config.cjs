/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#d0196e',
      },
      fontFamily: {
        poppins: ['poppins', 'Poppins'],
      },
    },
  },
  plugins: [],
};
