const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ProvidePlugin } = require("webpack");
const json5 = require("json5");
const path = require("path");

module.exports = {
  // https://webpack.js.org/concepts/entry-points/
  entry: {
    main: {
      import: "./src/js/main.js",
      filename: "js/main.[contenthash].js",
    },

    auth: {
      import: "./src/js/auth.js",
      filename: "js/auth.[contenthash].js",
      dependOn: "main",
    },
  },

  // https://webpack.js.org/concepts/output/
  output: {
    path: path.resolve(__dirname, "dist"),
    // This path is IMPORTANT
    // to load fonts and images
    publicPath: ".",
    //
    assetModuleFilename: "./img/[name].[ext]",
    clean: true,
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      //бандлы скриптов для страниц
      chunks: ["main", "auth"],
      ///
      filename: "index.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/step1.html",
      inject: "body",
      chunks: ["main", "auth", "step1"],
      filename: "step1.html",
    }),

    // https://webpack.js.org/plugins/provide-plugin/
    new ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    // https://webpack.js.org/plugins/mini-css-extract-plugin/
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
  ],

  // https://webpack.js.org/concepts/modules/
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: [
          {
            loader: "ejs-webpack-loader",
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
