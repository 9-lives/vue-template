import Vue from 'vue'

const ctx = require.context('./', true, /^\.\/(?!index)\S+\.js$/)

for (let i of ctx.keys()) {
  for (let c of Object.values(ctx(i))) {
    Vue.component(c.name, c)
  }
}