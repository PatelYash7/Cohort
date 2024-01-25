/** @type {import('tailwindcss').Config} */
export default {
  content: [
	    "./src/**/*.{js,ts,jsx,tsx}",
	    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          'box':'#146EB4',
        }
      }
    },
  },
  plugins: [],
}