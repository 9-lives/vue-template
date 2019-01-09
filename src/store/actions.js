import {
  rootMutation,
} from 'store/mutationsType'

/**
 * 根 actions
 */
export default {
  // 根 action 示例
  action({
    commit,
  }, payload) {
    commit(rootMutation, payload)
  },
}