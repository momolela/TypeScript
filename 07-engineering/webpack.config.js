// node 提供的 path 模块，不用我们自己去寻地址，直接导入即可
const path = require("path");
// 安装的插件
const htmlWebpackPlugin = require("html-webpack-plugin");

// webpack 所有的配置文件在这里
module.exports = {
  // 指定入口文件，可以是字符串，数组（多页面），对象三种格式
  entry: "./src/index.ts",

  // 打包后的输出配置
  output: {
    // path: './build'
    path: path.resolve(__dirname, "build"), // 输出到哪个位置
    filename: "bundle.js", // 输出的文件
  },

  // 指定具体格式文件的处理
  module: {
    // .ts 文件，用 ts-loader 转换，排除 node_modules 里面的 .ts 文件
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }],
  },

  // 插件使用
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  // 现在想多个 ts 之间互相引用模块，为了能够 import 其他 ts 的 export 的东西，需要在webpack 配置文件中配置 resolve
  resolve: {
    extensions: [".ts", ".js"],
  },

  // 打包模式
  // 开发模式：打包的结果是我们能看懂的
  // 生产模式：打包的结果会去除 console，注释，空格，空行
  mode: "development",
};
