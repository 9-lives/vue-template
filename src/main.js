import Vue from 'vue'

import mixins from 'src/mixins'
import router from 'router'
import store from 'store'

import app from 'components/pages/app.vue'


Vue.config.productionTip = false
Vue.mixin(mixins)
new Vue({
  render: h => h(app),
  router,
  store,
}).$mount('#app')
