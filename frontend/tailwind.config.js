/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  "./node_modules/flowbite/**/*.jsx", "./node_modules/flowbite/**/*.js"],
//   theme: {
//     extend: {
//       colors:{
//         black_first_theme : "#050505",
//         black_second_theme : "#191919",
//         third_color_theme : "#ff5349",
//         forth_color_theme: "#FFA458",
//         fifth_color_theme : "#F2F3F5"
//       },
//       height: {
//         "120" : "120rem"
//       },
//       width:{
//         "9,9/10" : "99%"
//       }
      
//     },
//   },
//   plugins: [require('flowbite/plugin')],
// }

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  "./node_modules/flowbite/**/*.jsx", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        black_first_theme : "#050505",
        black_second_theme : "#292929",
        third_color_theme : "#ff5349",
        forth_color_theme: "#FFA458",
        fifth_color_theme : "#E2E5DE"
      },
      height: {
        "134" : "36rem",
        "9,9/10" : "99%",
        "9/10" : "90%"
      },
      width:{
        "9,9/10" : "99%"
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans'],
        'serif': ['ui-serif', 'Georgia', 'Times', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Monaco', 'monospace'],
        'display': ['Oswald', 'sans'],
        'body': ['"Open Sans"', 'sans'],
        'thick': ['semibold♦', 'sans'], // Add your thick font here
        'cursive': ['"Pacifico"', 'cursive'], // Add a cursive font
        'fantasy': ['"Impact"', 'fantasy'], // Add a fantasy font
        // Add more custom font families here as needed
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        popIn : {
          '0%': { width : "3.5rem", height : "3.5rem"},
          '50%': { width : "6.5rem", height : "6.5rem" },
          '100%': { width : "3.5rem", height : "3.5rem"},
         
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
         'icon-pop-in' : "popIn 0.5s ease-in-out 1",
      },
      
    },
  },
  plugins: [require('flowbite/plugin'), require("daisyui"), require('tailwindcss-animated')],
});