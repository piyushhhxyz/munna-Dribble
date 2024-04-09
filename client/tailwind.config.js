/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customYellow: '#f2d082',
        textYellow: '#835f14',
        f3f3f3: '#f3f3f3',
        ea478b: '#ea478b',
        616066:'#616066',
        e0e0e0:'#e0e0e0',
        g9c9da5:'#9c9da5',
        ffeeee:"#ffeeee"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}