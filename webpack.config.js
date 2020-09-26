const dotenvExpand = require("dotenv-expand");
const dotenv = require("dotenv");
const CopyPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const UnminifiedWebpackPlugin = require("unminified-webpack-plugin");
const DotEnvPlugin = require("dotenv-webpack");
const path = require("path");

const enviroment = dotenv.config({ path: ".env" });
dotenvExpand(enviroment);

module.exports = {
  mode: process.env.APP_ENV,
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  entry: {
    index: "./src/index.js",
    background: "./src/background.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, process.env.BUILD_PATH),
    sourceMapFilename: "assets/[name].js.map",
  },
  devtool: "inline-source-map",
  devServer: {
    inline: true,
    port: 3000,
    writeToDisk: true,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  plugins: [
    new DotEnvPlugin(),
    new UnminifiedWebpackPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
        },
      ],
    }),
  ],
};
