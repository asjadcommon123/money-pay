/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'light-green': '#37d70d',
        'dark-green': '#001707',
        'rich-black-hover': '#011830',
        'blue-sapphire': '#006983',
        'blue-sapphire-hover': '#0786a6',
        grey: '#808080',
        'danger-red': '#D51414',
        platinum: '#f4f7f0',
        alabaster: '#EEF0EB',
        'milk-grey': '#ccc',
      },
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(0deg, rgba(16,69,2,1) 0%, rgba(1,38,8,1) 37%, rgba(4,5,5,1) 100%);',
      },
      boxShadow: {
        xl: ' 2px 6px 5px 0px rgba(145,145,150,0.47)',
        xxl: '   3px 3px 5px 0px rgba(145,141,141,0.75)',
        '2xl': '3px 3px 12px -2px rgba(0,0,0,0.75)',
      },
    },

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },

  plugins: [],
};
