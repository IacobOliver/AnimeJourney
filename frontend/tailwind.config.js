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
        black_second_theme : "#191919",
        third_color_theme : "#ff5349",
        forth_color_theme: "#FFA458",
        fifth_color_theme : "#F2F3F5"
      },
      height: {
        "134" : "36rem"
      },
      width:{
        "9,9/10" : "99%"
      }
      
    },
  },
  plugins: [require('flowbite/plugin')],
});