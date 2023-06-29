const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "/Users/zxc/enCloth_project/clothesShop/package.json",
  devtool: "source-map",
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.txt$/, use: "raw-loader" },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    clean: true,
  },
  mode: "production",
};
