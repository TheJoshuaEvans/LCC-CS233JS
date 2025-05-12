import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import pathRelativeToLabs from './utils/path-relative-to-labs.js';

export default {
  mode: 'development',
  entry: {
    index: pathRelativeToLabs('lab5/index.js'),
  },
  output: {
    path: pathRelativeToLabs('lab5/live'),
    filename: '[name].js',
    clean: true,
  },
  target: 'web',
  devServer: {
    static: pathRelativeToLabs('lab5/live'),
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
      template: pathRelativeToLabs('lab5/index.html'),
      chunks: ['index'],
      inject: 'body',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: pathRelativeToLabs('lab5/css'),
          to: pathRelativeToLabs('lab5/live/css'),
        },
        {
          from: pathRelativeToLabs('lab5/images'),
          to: pathRelativeToLabs('lab5/live/images'),
        },
      ],
    }),
  ],
};
