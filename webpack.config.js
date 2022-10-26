const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')




module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader",'postcss-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.json', '.png']
  },
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    port: 5500,
    hot: false,
    liveReload: true,
  },
  plugins: [new ESLintPlugin(), new HTMLWebpackPlugin({
    template: "./src/index.html"
  }),
  new CleanWebpackPlugin(), new MiniCssExtractPlugin({
    // filename: '[name].[contenthash].css'
    filename: "[name].css",
    chunkFilename: "[id].css",
  }),
  new BundleAnalyzerPlugin(),],
};