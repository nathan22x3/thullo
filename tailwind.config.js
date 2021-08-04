const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './public/index.html',
    './src/components/**/*.{js,jsx}',
    './src/containers/**/*.{js,jsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      gray: {
        50: '#f2f2f2',
        100: '#e0e0e0',
        200: '#bdbdbd',
        300: '#828282',
        400: '#4f4f4f',
        500: '#333333',
      },
      red: '#eb5757',
      orange: '#f2994a',
      yellow: '#f2c94c',
      green: '#219653',
      blue: '#2f80ed',
      purple: '#9b51e0',
      pink: '#e98899',
    },
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      noto: ['Noto Sans', ...defaultTheme.fontFamily.sans],
    },
  },
};
