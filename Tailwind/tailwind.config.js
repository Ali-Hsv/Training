// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c32f27',
        secondary: {
          100: '#f7b538',
          200: '#db7c26',
          300: '#d8572a',
        },
        darker: '#780116',
      },
      fontFamily: {
        body: ['Oswald'],
      }
    },
  },
  plugins: [],
}
