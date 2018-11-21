import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import enUS from './en-US'
import zhCN from './zh-CN'

export default new VueI18n({
  locale: 'en-US',
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
  },
})
