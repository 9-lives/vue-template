<template>
  <svg class="p-svg-icon" aria-hidden="true">
    <use :xlink:href="icName" :href="icName"></use>
  </svg>
</template>
<script>
// 配置文件
import { config } from 'ui/config'

export default {
  name: `${config.prefix}-svg-icon`,
  props: {
    name: String,
  },
  data () {
    return {
      icName: `#ic-${this.name}`
    }
  }
}
</script>
<style lang="scss" scoped>
.p-svg-icon {
  fill: currentColor;
  height: 1em;
  overflow: hidden;
  vertical-align: middle;
  width: 1em;
}
</style>
