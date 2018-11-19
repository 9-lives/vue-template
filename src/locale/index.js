import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import en from './en'
import zhCN from './zh-cn'

export default new VueI18n({
    locale: 'zh-CN',
    {
        'en': en,
        'zh-CN': zhCN,
    },
})