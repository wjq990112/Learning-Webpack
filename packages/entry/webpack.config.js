const path = require('path');

module.exports = {
  entry: ['./index.js', './main.js'],
  // entry: {
  //   index: './index.js',
  //   main: './main.js',
  // },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './'),
  },
};
