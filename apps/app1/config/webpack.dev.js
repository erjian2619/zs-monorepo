
const webpackMerge = require('webpack-merge')
const webpackCommon = require('./webpack.common')

const webpackDev = webpackMerge.merge(webpackCommon, {
  mode: 'development',
  devServer: {
    hot: true,
    open: true
  }
})

module.exports = webpackDev

