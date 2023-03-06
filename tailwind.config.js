/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,scss}",
    // "./app/screens/home/**/*.{js,ts,jsx,tsx,scss}",
    "./pages/**/*.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'rc': '160px 100px 400px rgba(255, 56, 80, 0.8)',
        'lc': '-160px -100px 400px rgba(255, 56, 80, 0.8)',
      }
    }
  },
  plugins: [],
}
