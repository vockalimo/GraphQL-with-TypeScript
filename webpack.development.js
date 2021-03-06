const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

//#watch: true
module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry: ['webpack/hot/poll?1000', path.join(__dirname, 'src/server.ts')],
  externals: [
    nodeExternals({
      allowlist: ['webpack/hot/poll?1000']
    })
  ],
  mode: 'development',
  plugins: [new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
});
