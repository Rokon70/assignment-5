/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // 🎨 Single shared brand gradient — change these 3 colors
      // and the whole app (logo, hero heading, buttons) re-themes.
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #FB923C 0%, #EC4899 50%, #8B5CF6 100%)",
      },
      colors: {
        brand: {
          orange: "#FB923C",
          pink: "#EC4899",
          violet: "#8B5CF6",
        },
      },
    },
  },
  plugins: [],
}
