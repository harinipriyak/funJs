const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    'bundle': ['babel-polyfill', './client/javascripts/index.js'],
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(process.cwd(), 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.sass', '.css'],
    alias: {
      app: path.resolve(__dirname, 'app'),
      client: path.resolve(__dirname, 'client'),
      config: path.resolve(__dirname, 'config'),
      test: path.resolve(__dirname, 'test'),
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'client', 'javascripts')],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
      }
      },
      {
        test: /\.css?$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less/,
        loader: 'style!css!less',
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
        loader: ['url-loader?limit=1024&name=[name]-[hash:8].[ext]!image-webpack', 'file-loader'],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
]
};