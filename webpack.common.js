const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

module.exports = (env) => {
  return {
    mode: "development",
    entry: {
      index: './src/index.js'
    },
    output: {
      // 打包文件根目录
      path: path.resolve(__dirname, "dist/"),
      filename: "[name].[hash:6].js",
    },
    plugins: [
      // 生成 index.html
      new HtmlWebpackPlugin({
        title: "demo wrp",
        filename: "index.html",
      }),
      new HtmlWebpackPlugin({
        title: "new page wrp",
        filename: "new.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          use: ["babel-loader"],
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: lessRegex,
          exclude: lessModuleRegex,
          use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
          sideEffects: true,
        },
        {
          test: lessModuleRegex,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  getLocalIdent: getCSSModuleLocalIdent,
                }
              }
            },
            "postcss-loader",
            "less-loader"
          ],
        }
      ]
    },
    devServer: {
      port: 8080,
      host: '0.0.0.0',
    }
  }
}