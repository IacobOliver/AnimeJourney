/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  "./node_modules/flowbite/**/*.jsx"],
  theme: {
    extend: {
      colors:{
        black_first_theme : "#050505",
        black_second_theme : "#171717",
        light_purple_theme : "#301E67",
        light_blue_theme : "#5B8FB9",
        white_blue_theme : "#5B8FB9"
      },
      width:{
        "9,9/10" : "99%"
      }
    },
  },
  plugins: [],
}

