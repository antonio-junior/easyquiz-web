/* eslint-disable */
const { join } = require('path');

module.exports = {
  content: ['./pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
  variants: {
    tableLayout: ['responsive', 'hover'],
  },
};
