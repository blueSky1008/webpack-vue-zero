const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 配合 vue-loader 使用，用于编译转换 .vue 文件
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: 'vue-loader'
      },
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre', // 编译前检查
        exclude:/(node_modules)/
      },
      {
        test: /.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            // 解决vue-loader处理之后img src变成"[object Module]"问题
            esModule: false // 不使用esModule的规范，因为vue使用的是commonjs语法规范，而file-loader/url-loader使用的es module语法规范。 
          }
        }
      },
      
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // 值要求的是一个代码片段
      BASE_URL: JSON.stringify('')
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '自己实现一个vue的webpack配置文件',
      template: './public/index.html',
      minify: false,
      inject: true
    }),
  ],
}