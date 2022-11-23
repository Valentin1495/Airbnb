/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        13: "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
