

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'base': '#fcfcfc',
      'nav': '#627c85',
      'dark-nav': '#9DD9EE',
      'button': '#FFC1CF',
      'dark-button': '#ED6887',
      'txt': '#67597A',
      'green-grey': '#35524a',
      'white': '#ffffff',
      'black': '#000000',
      'sidebar': '#8FB8DE',
      'input': '#efefef',
      'dark-base': '#1D2125',
      'dark-text': '#F7F8F9',
    },
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto", 
      },
      spacing: {
        '1': '8px', 
        '2': '16px', 
        '3': '24px', 

      },
      fontFamily: {
        sans: ["var(--font-rubik)"],
      },      
      fontSize: {
        'norm': '1rem'
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
};
