import {
  modMutation,
} from 'store/mutationsType'

/**
 * 根 mutations
 */
export default {
  // 模块 mutation 示例
  [modMutation](state, {
    amount,
  } = {}) {
    state.count += amount
  }
}