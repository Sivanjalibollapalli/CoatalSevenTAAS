/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00313A', // deep navy/teal
        secondary: '#009CA6', // aqua/teal
        accent: '#00D6C6', // bright accent teal
        'logo-teal': '#3ED6C1', // logo highlight
        'logo-dark': '#1B2B34', // logo dark
      },
    },
  },
  plugins: [],
};
