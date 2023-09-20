/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'errorRed':'hsl(0, 100%, 66%)',
      'purpleBorder':'hsl(249, 99%, 64%) ',
      'darkViolet':'hsl(278, 68%, 11%)',
      'darkGray':'hsl(279, 6%, 55%)',
      'lightGray':'hsl(270, 3%, 87%)',
      'darkPurple':'hsl(278, 94%, 30%)'
    }
  },
  plugins: [],
}