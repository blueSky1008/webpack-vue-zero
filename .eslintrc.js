module.exports = {
  root: true, // 告诉eslint使用此文件为配置文件，可以不写，只是方便直接定位到此文件
  env: {
    browser: true, // 可以使用浏览器的环境变量
    node: true, // 可以使用node的变量
    commonjs: true, // 可以使用commonjs规范
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'standard' // eslint的规则模板
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module', // 使用es module模块
    parser: 'babel-eslint', // eslint的解析器
    jsx: true // 开启jsx
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
