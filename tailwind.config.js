/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors :{
      'portica': {
        '50': '#fefce8',
        '100': '#fefac3',
        '200': '#fef18a',
        '300': '#fde767',
        '400': '#f9cf16',
        '500': '#e9b609',
        '600': '#ca8d04',
        '700': '#a16407',
        '800': '#854f0e',
        '900': '#714012',
        '950': '#422106',
    },
    
      'main':'#101820',
      'MyGray' :'#4C4C4C',
      'MySubGray' :'#444444',
      'gray-i' : '#7C7C7C',
      'gray-ii' : '#EBEBEB'
    },
  },
  plugins: [],
}