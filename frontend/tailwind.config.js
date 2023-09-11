/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  "./node_modules/flowbite/**/*.jsx"],
  theme: {
    extend: {
      colors:{
        black_first_theme : "#050505",
        black_second_theme : "#171717",
        third_color_theme : "#ff5349",
        forth_color_theme: "#5B8FB9",
        fifth_color_theme : "#F2F3F5"
      },
      width:{
        "9,9/10" : "99%"
      }
    },
  },
  plugins: [],
}

