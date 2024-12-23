/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        dmSans:["DM Sans", 'serif']
      },
      screens:{
        "mobileS":{"min":"0px","max":"320px"},
        "mobileM":{"min":"321px","max":"375px"},
        "mobileL":{"min":"376px","max":"425px"}
      }
    },
  },
  plugins: [],
}

