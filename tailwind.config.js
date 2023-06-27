/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
        roam: 'roam 20s infinite ease-in-out alternate',
        roam1: 'roam 10s infinite ease-in-out alternate',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        roam: {
          '0%': {
            transform: 'rotate(0deg)  translateX(-600px) translateY(-60px);',
          },
          '100%': {
            transform: 'rotate(360deg)  translateX(400px) translateY(600px);',
          },
        },
        roam1: {
          '0%': {
            transform: 'rotate(0deg)  translateX(-900px) translateY(-20px);',
          },
          '100%': {
            transform: 'rotate(360deg)  translateX(20px);',
          },
        }
      },
    },
  },
  plugins: [],
}

