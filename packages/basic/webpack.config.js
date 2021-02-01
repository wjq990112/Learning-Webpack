const path = require('path');

module.exports = {
  // 生产模式
  mode: 'production',
  // 入口文件
  entry: './index.js',
  output: {
    // 输出文件名称
    filename: 'bundle.js',
    // 输出文件路径
    path: path.join(__dirname, './'),
  },
  module: {
    rules: [
      {
        // 正则匹配后缀名为 .css 的文件
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
