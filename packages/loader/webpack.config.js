const path = require('path');

module.exports = {
  devtool: false,
  mode: 'development',
  context: path.join(__dirname, './src'),
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.join(__dirname, './src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, './src'),
        use: ['ts-loader'],
      },
    ],
  },
};
