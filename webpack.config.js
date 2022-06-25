import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "/src/index.js",
  output: {
    path: "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
