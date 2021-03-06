const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src/index.tsx'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env.UNSPLASH_AUTH_TOKEN': JSON.stringify(process.env.UNSPLASH_AUTH_TOKEN),
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
      'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
};
