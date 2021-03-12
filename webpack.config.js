const path = require('path');

const SRC_DIR = path.join(__dirname, 'client', 'src');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    filename: 'app.js',
    path: OUT_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        },
      },
      { test: /\.(png|jpeg)$/, use: 'url-loader' },
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx',]
  }
};
