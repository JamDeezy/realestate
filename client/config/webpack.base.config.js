import AutoPrefixer from "autoprefixer";
import Config from "webpack-config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default new Config().merge({
  context: __dirname,
  entry: {
    app: "../src/index.js"
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      title: "realestate",
      filename: "index.html",
      template: "../src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "sass-loader"
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      }
    ]
  }
});
