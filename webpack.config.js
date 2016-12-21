const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

const NODE_ENV = process.env.NODE_ENV;
const resolve = path.resolve;

const common = {
  target: 'web',
  context: resolve('src'),
  entry: {
    commons: [
      'babel-polyfill',
    ],
    bundle: './index',
  },
  output: {
    path: resolve('www'),
    publicPath: '/',
    filename: '[name].js',
    sourceMapFilename: "[name].js.map",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[local]',
          'postcss',
          'sass'
        ],
      },
      {
        test: /\.jpg$/,
        exclude: /node_modules/,
        loader: 'file',
      },
    ],
  },
  resolve: {
    root: resolve('src'),
    extensions: ['', '.js', '.css', '.scss'],
    modulesDirectories: ['node_modules'],
  },
  plugins: [
    new CleanWebpackPlugin('www'),
    new InlineEnviromentVariablesPlugin(['NODE_ENV', 'TARGET']),
    new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js'),
    new CopyWebpackPlugin([
      { from: 'index.html', to: 'index.html' },
      { from: 'xdk', to: 'xdk' },
    ]),
  ],
};

if (NODE_ENV === 'development') {
  module.exports = merge.smart(common, {
    devtool: 'source-map',
    plugins: [
      new webpack.NoErrorsPlugin(),
      // new WebpackShellPlugin({
      //   onBuildEnd: ['monaca debug'],
      // }),
    ],
  });
}

if (NODE_ENV === 'production') {
  module.exports = merge.smart(common, {
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        comments: false,
        sourceMap: false,
        mangle: true,
        minimize: true
      }),
    ],
  });
}
