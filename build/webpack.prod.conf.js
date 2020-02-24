const merge = require("webpack-merge")
const path = require("path")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin")
const baseConfig = require("./webpack.base.conf.js")

module.exports = merge(baseConfig, {
  mode:    "production",
  devtool: "source-map",
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new ParallelUglifyPlugin({
      uglifyJS: {
        output: {
          beautify: false,
          comments: false
        },
        compress: {
          warnings:      false,
          drop_console:  true,
          collapse_vars: true,
          reduce_vars:   true
        }
      },
      test:      /.js$/g,
      include:   path.resolve(__dirname, "../src"),
      exclude:   path.resolve(__dirname, "../node_modules"),
      sourceMap: false
    })
  ],
  optimization: {
    minimize: true
  }
})
