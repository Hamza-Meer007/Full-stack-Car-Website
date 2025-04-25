/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e91e63', // Red color similar to the original theme
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',
        },
        secondary: {
          DEFAULT: '#333333',
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#cccccc',
          300: '#b0b0b0',
          400: '#888888',
          500: '#666666',
          600: '#555555',
          700: '#444444',
          800: '#333333',
          900: '#222222',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
