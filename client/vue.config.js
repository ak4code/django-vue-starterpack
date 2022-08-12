const { defineConfig } = require('@vue/cli-service');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: true
  },
  outputDir: process.env.NODE_ENV !== 'production' ? 'dist' : '../server/static',
  chainWebpack: config => {
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },
  configureWebpack: {
    plugins: [
      new CleanWebpackPlugin({}),
      new WebpackManifestPlugin({})
    ]
  },
  devServer: {
    port: 8080,
    allowedHosts: [
      '127.0.0.1:8000',
      '127.0.0.1'
    ],
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  runtimeCompiler: true
});
