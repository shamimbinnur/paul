module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins'],

       },
      container: {
        center: true,
        screens: {
          sm: '1280px',
          md: '1280px',
          lg: '1280px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
      colors: {
        'white-light': '#EFEFEF',
        'gray-dark': '#030526',
        'orange-light': '#FF541E',
        'orange-dark': '#EB3800',
        'green': '#11BB4B',
        'yellow': '#FCFF64'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
