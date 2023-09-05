module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  css: {
    loaderOptions: {
      scss: {
        implementation: require('sass')
      }
    }
  },
  chainWebpack: config => {
    // 生產版本
    if (process.env.NODE_ENV === 'production') {
      config.optimization.delete('splitChunks') // 禁用代碼分割

      config.optimization.minimizer('terser').tap(args => {
        args[0].terserOptions = {
          ...args[0].terserOptions,
          output: {
            comments: false // 隱藏註解
          }
        }
        return args
      })

      // gzip壓縮
      config.plugin('CompressionPlugin').use('compression-webpack-plugin', [{
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css$/, // 要套用的文件類型
        threshold: 10240, // 對超過10k的檔案壓縮
        minRatio: 0.8 // 壓缩率小於0.8才會壓縮
      }])
    }
  },
  productionSourceMap: process.env.NODE_ENV !== 'production'
}
