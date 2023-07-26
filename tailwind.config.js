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
        10: '#e8871e'
      },
      black: {
        10: '#ffffff',
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
      },
      backgroundImage: {
        'headline': "url('../images/bg1.png')",
        'backone': "url('../images/bg2.png')",
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
