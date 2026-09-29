/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lb-black': '#0a0a0a',
        'lb-charcoal': '#1a1a1a',
        'lb-white': '#f5f5f5',
        'lb-gold': '#d4af37',
        'lb-gold-light': '#ebd475',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
