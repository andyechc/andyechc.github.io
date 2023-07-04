/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003BFF",
      },

      keyframes: {
        show: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },

        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        moving: {
          "0%": { top: "10" },
          "50%": { top: "90%" },
          "100%": { top: "10" },
        },
      },

      animation: {
        show: "show 1s ease-in-out",
        appear: "appear 1.5s ease-in-out",
        moving: "moving 60s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
