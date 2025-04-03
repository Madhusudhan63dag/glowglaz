/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js,jsx,tsx}"],
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
         brand: {
           green: '#57982A',
         },
       },
     },
   },
   plugins: [],
 }