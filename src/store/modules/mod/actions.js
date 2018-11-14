import { modMutation } from 'store/mutationsType'

/**
 * 模块 actions
 */
export default {
  action ({ commit }, payload) {
    commit(modMutation, payload)
  }
}
