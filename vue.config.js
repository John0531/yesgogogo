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
    }
  }
  productionSourceMap: process.env.NODE_ENV !== 'production'
}
