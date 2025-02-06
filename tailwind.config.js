/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 20px #8b5cf6, 0 0 30px #8b5cf6',
        'glowbutton': '0 0 10px #8b5cf6, 0 0 20px #8b5cf6',
        'glow-hover': '0 0 40px #8b5cf6, 0 0 60px #8b5cf6',
      },
    },
  },
  plugins: [],
};


