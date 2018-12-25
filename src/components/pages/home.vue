<template>
  <div>
    <p-svg-icon class="test" name="example"></p-svg-icon>
    <p-example></p-example>
    <router-link :to="{ name: 'patha' }">redirect</router-link>
  </div>
</template>

<script>
export default {
  mounted () {
  },
}
</script>

<style lang="scss" scoped>
.test {
  font-size: 16px;
}
</style>