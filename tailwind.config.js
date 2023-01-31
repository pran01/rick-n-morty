/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgclr: "#272b33",
        fgclr: "#3c3e44",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
