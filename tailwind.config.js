/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        jump: {
          "0%, 10%, 100%": { transform: "translateY(0)" },
          "5%": { transform: "translateY(-16px)" },
        },
      },
      animation: {
        jump: "jump 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
