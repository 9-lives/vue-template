const path = require('path')

module.exports = {
  chainWebpack(config) {
    setAlias(config)
    setLoaders(config)
  },
}

/**
 * 设置 loader
 */
function setLoaders(conf) {
  setSassRsLoader(conf)
  setSvgSpritesLoader(conf)

  /**
   * 设置 sass-resources-loader
   */
  function setSassRsLoader(conf) {
    const oneOfsMap = conf.module.rule('scss').oneOfs.store // map includes rule named as 'scss'

    for (let item of oneOfsMap.values()) {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            resolve('src/ui/styles/global/color.scss'),
            resolve('src/ui/styles/global/var.scss'),
            resolve('src/ui/styles/global/funs.scss'),
            resolve('src/ui/styles/global/mixins.scss'),
          ], // first in, first out
          sourceMap: true,
        })
        .end()
    }
  }

  /**
   * 设置 svg-sprites-loader
   */
  function setSvgSpritesLoader(conf) {
    conf.module.rule('svg').uses.clear()
    conf.module.rule('svg')
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'ic-[name]',
      })
  }
}

/**
 * 设置路径别名
 */
function setAlias(conf) {
  conf.resolve.alias
    .set('api', resolve('src/api/'))
    .set('assets', resolve('src/assets/'))
    .set('components', resolve('src/components/'))
    .set('config', resolve('config/'))
    .set('i18n', resolve('src/locale'))
    .set('plugins', resolve('src/plugins'))
    .set('router', resolve('src/router/'))
    .set('src', resolve('src/'))
    .set('store', resolve('src/store/'))
    .set('ui', resolve('src/ui/'))
    .set('utils', resolve('src/utils/'))
}

function resolve(dir) {
  return path.join(__dirname, dir)
}