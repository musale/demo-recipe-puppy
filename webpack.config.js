var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/build',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, {
        test: /\.module\.scss$/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'resolve-url', 'sass']
      }, {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        loaders: ["style", "css", "sass"]
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
