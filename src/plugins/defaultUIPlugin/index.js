// 基础组件
import * as baseComponents from 'src/components/base'

/**
 * 默认 UI 插件
 */
export const defaultUIPlugin = {
  install(vue, options) {
    for (let c of Object.values(baseComponents)) {
      vue.component(c.name, c)
    }
  }
}
