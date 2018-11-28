<template>
  <div>exampleComponent</div>
</template>
<script>
// 配置文件
import { projectConf } from 'config/project.conf'

export default {
  name: `${projectConf.componentPrefix}-example`
}
</script>
