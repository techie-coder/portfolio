/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
    	"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
	    'black' : '#0E0D0D',
	    'white' : '#FFFFFF',
	    'blue' : '#303AFF',
	    'yellow': '#F6E73B'
    },
    extend: {},
  },
  plugins: [],
}

