import Vue from 'vue'
import Vuex from 'vuex'

// 生成 Vuex.Store 实例前必须在 vue 上安装 vuex 插件
Vue.use(Vuex)

import actions from 'store/actions'
import * as getters from 'store/getters'
import * as modules from 'store/modules'
import mutations from 'store/mutations'
import state from 'store/state'

/**
 * 根 store
 */
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    ...modules,
  },
  mutations,
  state,
  strict: process.env.NODE_ENV !== 'production',
})
