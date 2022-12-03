const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        include: path.resolve(__dirname, 'app'),
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'eko_seats.js',
    chunkFilename: 'eko_seats.js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './app/index.html',
    }),
  ],
};
