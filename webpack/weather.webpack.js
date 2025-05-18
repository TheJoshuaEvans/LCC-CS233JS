import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import pathRelativeToLabs from './utils/path-relative-to-labs.js';

export default {
  mode: 'development',
  entry: {
    index: pathRelativeToLabs('lab6/weather/index.js'),
  },
  output: {
    path: pathRelativeToLabs('lab6/weather/live'),
    filename: '[name].js',
    clean: true,
  },
  target: 'web',
  devServer: {
    static: pathRelativeToLabs('lab6/weather/live'),
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
      template: pathRelativeToLabs('lab6/weather/index.html'),
      chunks: ['index'],
      inject: 'body',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: pathRelativeToLabs('lab6/weather/css'),
          to: pathRelativeToLabs('lab6/weather/live/css'),
        },
      ],
    }),
  ],
};
