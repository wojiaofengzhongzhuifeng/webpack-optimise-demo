const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index112233: path.resolve(__dirname, './src/index.js'),
    login445566: path.resolve(__dirname, './src/login.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/index.html'),
    filename: 'index.html',
    chunks: ['index112233']
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/login.html'),
    filename: 'login.html',
    chunks: ['login445566']
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  }),
  new CopyWebpackPlugin({
    patterns: [{
      from: path.resolve(__dirname, './src/img'),
      to: path.resolve(__dirname, './dist/img'),
    }]
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
  })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    compress: true,
    port: 9001,
    hot: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyWebpackPlugin({sourceMap: true}),
      new CssMinimizerWebpackPlugin()
    ],
  }
}
