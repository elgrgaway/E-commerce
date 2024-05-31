/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      borderOpacity: {
        10: "0.1",
        15: "0.15",
        20: "0.2",
        // Add more custom values as needed
      },
    },
  },
  plugins: [],
};
