const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackBaseConfig = require('../../webpack/webpack.base')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const dayjs = require('dayjs')
const pkg = require('./package.json')

process.env.NODE_ENV = 'production'

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: './index.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'index.min.js',
    library: 'components',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'antd': 'antd',
    '@ant-design/icons': '@ant-design/icons'
  },
  plugins: [
    // @todo
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    }),
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.(js|css)$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
  ],
})