/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: {
        10: '#f2fff3',
        20: '#ECFCED',
        30: '#5baa60',
      },
      orange: {
        10: '#e8871e',
        20: '#E8871E'
      },
      black: {
        100: '#0d1821',
      },
      blue: {
        10: '#A0BBD2',
        20: '#668EAF'
      }
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
