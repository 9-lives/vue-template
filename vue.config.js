const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        api: path.join(__dirname, 'src/api/'),
        assets: path.join(__dirname, 'src/assets/'),
        components: path.join(__dirname, 'src/components/'),
        config: path.join(__dirname, 'config/'),
        i18n: path.join(__dirname, 'src/locale'),
        router: path.join(__dirname, 'src/router/'),
        src: path.join(__dirname, 'src/'),
        store: path.join(__dirname, 'src/store/'),
        utils: path.join(__dirname, 'src/utils/'),
      }
    }
  },
}