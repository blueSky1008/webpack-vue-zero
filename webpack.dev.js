const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true, //启用 webpack 的模块热替换特性
    open: true, //自动打开浏览器
    contentBase: 'public',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})