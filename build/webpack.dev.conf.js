const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const baseConfig = require("./webpack.base.conf.js");
require("dotenv").config();

module.exports = merge(baseConfig, {
  mode:      "development",
  devtool:   "cheap-module-source-map",
  devServer: {
    contentBase: __dirname,
    compress:    true,
    port:        process.env.PORT,
    host:        process.env.HOST
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
