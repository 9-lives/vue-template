// 库
import 'normalize.css'
// 自定义 css
import 'styles/common/_normalize.scss'
// 基础组件
import * as baseComponents from 'src/components/base'

/**
 * 默认 UI 插件
 */
export const _uiPlugin = {
  install(vue, options) {
    for (let c of Object.values(baseComponents)) {
      vue.component(c.name, c)
    }
  }
}
