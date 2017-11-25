const path = require('path');
const webpack = require('webpack');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const pkg = require('./package.json');

const nodeEnv = process.env.NODE_ENV || 'production';

const libraryName = pkg.moduleName;

const plugins = [];
let outputFile;

if (nodeEnv === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = `${libraryName}.min.js`;
} else {
  outputFile = `${libraryName}.js`;
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
    library: libraryName,
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
  plugins,
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
