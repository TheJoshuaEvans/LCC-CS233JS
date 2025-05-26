import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import pathRelativeToLabs from './utils/path-relative-to-labs.js';

// this loads all of the variables in the .env file
// they're available in your code as process.env.KEY
import 'dotenv/config';

/**
 * flag Used to check if the environment is production or not
*/
const isProduction = (process.env.NODE_ENV === 'production');

/**
* Include hash to filenames for cache busting - only at production
*/
const fileNamePrefix = isProduction? '[chunkhash].' : '';

const exports = {
  mode: !isProduction ? 'development': 'production',
  entry: {
    home: pathRelativeToLabs('lab7/src/home.js'),
    about: pathRelativeToLabs('lab7/src/about.js'),
    status: pathRelativeToLabs('lab7/src/status.js'),
  },
  output: {
    path: pathRelativeToLabs('lab7/live'),
    filename: fileNamePrefix + '[name].js',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  target: 'web',
  devServer: {
    static: pathRelativeToLabs('lab7/live'),
  },
  /* no separate source map files in production */
  devtool: !isProduction ? 'source-map' : 'inline-source-map',
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
      {
        test: /\.css$/i,
        /* separate js code and css in production */
        use: isProduction ?
          [ MiniCssExtractPlugin.loader, 'css-loader']	:
          [ 'style-loader', 'css-loader'],
      },
      {
        test: /.s[ac]ss$/i,
        use: isProduction ?
          [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']	:
          [ 'style-loader', 'css-loader' , 'sass-loader'],
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathRelativeToLabs('lab7/index.html'),
      chunks: ['home'],
      inject: 'body',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: pathRelativeToLabs('lab7/about.html'),
      chunks: ['about'],
      inject: 'body',
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template: pathRelativeToLabs('lab7/status.html'),
      chunks: ['status'],
      inject: 'body',
      filename: 'status.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: pathRelativeToLabs('lab7/images'),
          to: pathRelativeToLabs('lab7/live/images'),
        },
      ],
    }),
    /* app uses global SERVER_URL rather than process.env.SERVER_URL */
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      SERVER_URL: JSON.stringify(process.env.SERVER_URL),
    }),
  ],
  /* separates js (and css) that is shared between bundles - allows browser to cache */
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

/**
 * Production only plugins
 */
if(isProduction) {
  exports.plugins.push(
    new MiniCssExtractPlugin({
      filename: fileNamePrefix + '[name].css',
    }),
  );
};

export default exports;
