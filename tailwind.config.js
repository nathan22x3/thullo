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
      white: '#ffffff',
      gray: {
        50: '#f2f2f2',
        100: '#e0e0e0',
        200: '#bdbdbd',
        300: '#828282',
        400: '#4f4f4f',
        500: '#333333',
      },
      black: '#000000',
      red: { light: '#fbdada', DEFAULT: '#eb5757', dark: '#e73636' },
      orange: { light: '#fce9d9', DEFAULT: '#f2994a', dark: '#f0882d' },
      yellow: { light: '#fcf4db', DEFAULT: '#f2c94c', dark: '#efbf2e' },
      green: { light: '#d3eadd', DEFAULT: '#219653', dark: '#1a7541' },
      blue: { light: '#dae4fd', DEFAULT: '#2f80ed', dark: '#146de1' },
      purple: { light: '#ebdcf9', DEFAULT: '#9b51e0', dark: '#872fda' },
      pink: { light: '#f9dde2', DEFAULT: '#e98899', dark: '#dc415e' },
    },
    boxShadow: {
      DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      md: '0 6px 15px 1px rgba(0, 0, 0, 0.1)',
    },
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      noto: ['Noto Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontSize: {
        '2xs': ['0.625rem', '0.75rem'],
      },
    },
  },
};
