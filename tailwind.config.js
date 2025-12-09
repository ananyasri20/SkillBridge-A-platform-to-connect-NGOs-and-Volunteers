module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e455b',
        secondary: '#35a8b6',
        accent: '#ff751f',
        'primary-light': '#3a5773',
        'secondary-light': '#4bc0d0',
        'accent-light': '#ff8c42',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}