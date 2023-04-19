/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightPrimary:"#F1F9FC",
        primary:"#0073A7",
        mediumPrimary:"#389AC6",
        gray:"rgba(0, 0, 0, 0.5)"
      }
    },
      screens: {
        'xs':"305px",
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
    }
  },
  plugins: [],
}

