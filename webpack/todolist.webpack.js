import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import pathRelativeToLabs from './utils/path-relative-to-labs.js';

export default {
  mode: 'development',
  entry: {
    index: pathRelativeToLabs('lab4/todo-list/index.js'),
  },
  output: {
    path: pathRelativeToLabs('lab4/todo-list/live'),
    filename: '[name].js',
    clean: true,
  },
  target: 'web',
  devServer: {
    static: pathRelativeToLabs('lab4/todo-list/live'),
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
      template: pathRelativeToLabs('lab4/todo-list/index.html'),
      chunks: ['index'],
      inject: 'body',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: pathRelativeToLabs('lab4/todo-list/css'),
          to: pathRelativeToLabs('lab4/todo-list/live/css'),
        },
      ],
    }),
  ],
};
