const { merge } = require('webpack-merge') // 用来合并webpack配置文件
const webpack = require('webpack')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true, //启用 webpack 的模块热替换特性
    open: true, //自动打开浏览器
    contentBase: 'public', // 静态资源目录
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})