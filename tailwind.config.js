/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ' #008080',
        secondary: '#F5F5F5',
        accent: '#FFA500',
        darkGrey: '#333333',

      }
    },
    fontFamily:{
      mont: ['Montserrat', 'sans-serif'],
      nunito:['Nunito','san-serif'],
      lato:['Lato','san-serif'],
      roboto:['Roboto','sans']
    },
    container:{
      center: true,
    }
    
  },
  plugins: [],
}






