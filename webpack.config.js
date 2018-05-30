const path = require("path");
const webpack = require("webpack");

const contextPath = path.join(__dirname, "src");
const buildPath = path.join(__dirname, "build");

module.exports = {
  context: contextPath,
  entry: {
    app: ["./index.js"]
  },
  output: {
    path: buildPath,
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss?/i,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: contextPath,
    compress: true,
    historyApiFallback: true
  }
};
