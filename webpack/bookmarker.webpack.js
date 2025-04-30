import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import pathRelativeToLabs from './utils/path-relative-to-labs.js';

export default {
  mode: 'development',
  entry: {
    index: pathRelativeToLabs('lab4/bookmarker/index.js'),
  },
  output: {
    path: pathRelativeToLabs('lab4/bookmarker/live'),
    filename: '[name].js',
    clean: true,
  },
  target: 'web',
  devServer: {
    static: pathRelativeToLabs('lab4/bookmarker/live'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathRelativeToLabs('lab4/bookmarker/index.html'),
      chunks: ['index'],
      inject: 'body',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: pathRelativeToLabs('lab4/bookmarker/css'),
          to: pathRelativeToLabs('lab4/bookmarker/live/css'),
        },
        {
          from: pathRelativeToLabs('lab4/bookmarker/images'),
          to: pathRelativeToLabs('lab4/bookmarker/live/images'),
        },
      ],
    }),
  ],
};
