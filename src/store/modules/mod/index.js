import actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'

/**
 * 模块 store
 */
export const mod = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
  strict: process.env.NODE_ENV !== 'production',
}
