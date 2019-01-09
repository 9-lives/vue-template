import {
  rootMutation,
} from 'store/mutationsType'

/**
 * 根 mutations
 */
export default {
  // 根 mutation 示例
  [rootMutation](state, {
    amount,
  } = {}) {
    state.count += amount
  }
}