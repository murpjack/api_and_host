const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const options = {
  mode: "development",

  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "public", "static"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "template.html"),
      filename: "../index.html", //relative to root of the application
      appTitle: "Api and Host | API AND HOST",
      pageHeader: "Api and Host",
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "add-itinerary-template.html"),
      filename: "../portal/add-itinerary/index.html", //relative to root of the application
      appTitle: "Add Itinerary | API AND HOST",
      pageHeader: "Add an Itinerary",
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "add-venue-template.html"),
      filename: "../portal/add-venue/index.html", //relative to root of the application
      appTitle: "Add Venue | API AND HOST",
      pageHeader: "Add an Venue",
      hash: true,
    }),
  ],
};

module.exports = options;
