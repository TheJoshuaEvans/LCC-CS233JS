import path from 'path';
import url from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../docs/labs/lab4/todo-list/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../docs/labs/lab4/todo-list/live'),
    filename: '[name].js',
    clean: true,
  },
  target: 'web',
  devServer: {
    static: path.resolve(__dirname, '../docs/labs/lab4/todo-list/live'),
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
      template: path.resolve(__dirname, '../docs/labs/lab4/todo-list/index.html'),
      chunks: ['index'],
      inject: 'body',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../docs/labs/lab4/todo-list/css'),
          to: path.resolve(__dirname, '../docs/labs/lab4/todo-list/live/css'),
        },
      ],
    }),
  ],
};
