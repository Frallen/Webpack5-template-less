const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
module.exports = merge(common, {
  mode: "development",

  devtool: "inline-source-map",

  devServer: {
    open: true,
    static: {
      directory: "./src",
      watch: true,
    },
  },
});
