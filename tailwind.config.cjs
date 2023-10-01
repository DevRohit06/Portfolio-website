/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#d1d5db",
      },
      animation: {
        text: "text 5s ease infinite",
        roam: "roam 20s infinite ease-in-out alternate",
        roam1: "roam 10s infinite ease-in-out alternate",
        menu: "menu .5s ease-in "
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        menu: {
          "0%": {
            transform: "translateX(1000px)",
            "opacity": "1",
          },
          "100%": {
            transform: "translateX(0px)",
            "opacity": "1",
          }
          
        },
        roam: {
          "0%": {
            transform: "rotate(0deg)  translateX(-600px) translateY(-60px);",
          },
          "100%": {
            transform: "rotate(360deg)  translateX(400px) translateY(600px);",
          },
        },
        roam1: {
          "0%": {
            transform: "rotate(0deg)  translateX(-900px) translateY(-20px);",
          },
          "100%": {
            transform: "rotate(360deg)  translateX(20px);",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
