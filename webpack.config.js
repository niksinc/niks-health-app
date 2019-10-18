const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: "pre",
        use: [
          {
            loader: "awesome-typescript-loader"
          },
          {
            loader: "tslint-loader",
            options: {
              tsConfigFile: "tsconfig.json",
              emitErrors: true,
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html"
    }),
    new DashboardPlugin()
  ],
  devServer: {
    host: "niks-health-app.com",
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
