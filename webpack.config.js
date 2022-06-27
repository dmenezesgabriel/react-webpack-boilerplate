const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode: ${mode}`);

  return {
    mode,
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.[contenthash].js",
    },
    devtool: "source-map",
    devServer: {
      open: true,
      hot: true,
    },
    module: {
      rules: [
        { test: /\.(js)$/, exclude: /node_modules/, use: ["babel-loader"] },
        {
          test: /\.css$/,
          use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          exclude: /node_modules/,
          use: ["url-loader", "file-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./index.html" }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
