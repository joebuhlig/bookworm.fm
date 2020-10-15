var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname,"./assets/javascripts/"),
    filename: "bundle.js"
  },
  module: {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
    ]
  }
};
