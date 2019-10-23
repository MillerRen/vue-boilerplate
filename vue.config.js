module.exports = {
  devServer: {
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  css: {
    extract: false,
    sourceMap: false
  },
  pwa: {
    workboxOptions: {
      importWorkboxFrom: 'local',
      exclude: ['index.html']
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
  configureWebpack: {
    output: {
      libraryTarget: 'umd',
      libraryExport: ''
    }
  }
}
