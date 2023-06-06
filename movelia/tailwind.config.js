/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        primary:'',
        header:'',
        body:'',
      }
    },
  },
  plugins: [
      require('@tailwindcss/line-camp')
  ],
}

