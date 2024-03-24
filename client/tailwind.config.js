/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/post3.png')",
        "banner-pattern": "url('./src/assets/banner.jpg')",
        "banner-pattern-r": "url('./src/assets/div-img.png')",
      },
    },
  },
  plugins: [],
};
