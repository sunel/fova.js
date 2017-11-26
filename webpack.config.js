const path = require('path');
const webpack = require('webpack');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const pkg = require('./package.json');

module.exports = {
  entry: {
    'fova.js': './src/index.js',
    'fova.min.js': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]',
    library: pkg.moduleName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: pkg.babel,
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js'],
  },
  plugins: [
    new UglifyJsPlugin({
      test: /\.min\.js$/,
      compress: { warnings: false },
      output: { comments: false },
    }),
  ],
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  },
  devtool: 'source-map',
};
