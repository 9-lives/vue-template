const path = require('path')

module.exports = {
  chainWebpack (config) {
    config.resolve.alias
      .set('api', resolve('src/api/'))
      .set('assets', resolve('src/assets/'))
      .set('components', resolve('src/components/'))
      .set('config', resolve('config/'))
      .set('i18n', resolve('src/locale'))
      .set('plugins', resolve('src/plugins'))
      .set('router', resolve('src/router/'))
      .set('src', resolve('src/'))
      .set('store', resolve('src/store/'))
      .set('utils', resolve('src/utils/'))
  },
}

function resolve (dir) {
  return path.join(__dirname, dir)
}
