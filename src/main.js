import Vue from 'vue'

import i18n from 'i18n'
import mixins from 'src/mixins'
import router from 'router'
import store from 'store'

import 'ui'

import app from 'src/components/pages/app.vue'

Vue.config.productionTip = false
Vue.mixin(mixins)

new Vue({
  i18n,
  render: h => h(app),
  router,
  store,
}).$mount('#app')
