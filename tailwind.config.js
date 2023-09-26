import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        'md': '768px',
      },
      colors: {
        green: {
          10: '#f2fff3',
          20: '#ECFCED',
          30: '#5baa60',
          40: 'rgba(212, 238, 214, 0.2)'
        },
        orange: {
          10: '#e8871e',
          20: 'rgba(232, 135, 30, 0.05)',
          30: '#FFC107',
        },
        black: {
          10: '#ffffff',
          15: '#F2F1EF',
          20: '#C7CDD2',
          25: '#c7c7c7',
          30: 'rgba(171, 171, 171, 0.67)',
          50: '#ABABAB',
          100: '#0d1821',
        },
        blue: {
          10: '#A0BBD2',
          20: '#668EAF',
          30: 'rgba(13, 24, 33, 0.05)'
        },
        red: {
          50: '#FF1818'
        }
      },

      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'headline': "url('../images/bg1.png')",
        'backone': "url('../images/bg2.png')",
        'backtwo': "url('../images/bg3.png')",
        'testimonialbg': "url('../images/testimonialbg.png')",
        'testimonialmobile': "url('../images/testimonialmobile.png')",
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
});
