const path = require('path')

module.exports = {
  chainWebpack(config) {
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
      .set('styles', resolve('src/styles/'))
      .set('utils', resolve('src/utils/'))

    const oneOfsMap = config.module.rule('scss').oneOfs.store // map includes rule named as 'scss'

    for (let item of oneOfsMap.values()) {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            resolve('src/styles/global/var.scss'),
            resolve('src/styles/global/color.scss'),
            resolve('src/styles/global/funs.scss'),
            resolve('src/styles/global/mixins.scss'),
          ],
          sourceMap: true,
        })
        .end()
    }
  },
}

function resolve(dir) {
  return path.join(__dirname, dir)
}