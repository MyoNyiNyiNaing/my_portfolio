/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Montserrat" : ['Montserrat',"sans-serif"]
      },
      colors: {
        "para" : "#787878",
        "heading" : "#000000"
      }
    },
    fontSize: {
      sm: ['16px', '28px'],
      base: ['22px', '33px'],
      base_sm : ['19px','28.5px'],
      hero_title: ['68px', '74.8px'],
      title: ['50px', '55px'],
      title_sm : ['40px', '44px']
    }

  },
  plugins: [],
}

