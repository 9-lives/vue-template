// 库
import 'normalize.css'
// 自定义 css
import './common/_normalize.scss'
// 基础组件
import * as baseComponents from './components'
// svg 图片
import './assets/imgs/icons/svg'

/**
 * 默认 UI 插件
 */
export default {
  install(vue, options) {
    for (let c of Object.values(baseComponents)) {
      vue.component(c.name, c)
    }
  }
}
