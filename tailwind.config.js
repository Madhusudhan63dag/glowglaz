/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        garamond: ['"EB Garamond"', 'serif'],
      },
      colors: {
        taupe: '#8D8B86',
        bluegray: {
          light: '#818298',
          DEFAULT: '#6C8299',
        },
        background: {
          primary: '#F9FAFB',
          secondary: '#FFFFFF',
          section: '#F5F5F5',
        },
        brand: {
          green: '#57982A',
          'green-dark': '#426F1F',
        },
        text: {
          primary: '#222222',
          secondary: '#555555',
        },
        accent: {
          blue: '#74818A',
          'blue-light': '#8C979E',
        },
      },
    },
  },
  plugins: [],
}