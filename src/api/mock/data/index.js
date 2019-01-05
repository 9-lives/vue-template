let ctx = require.context('./', true, /^\.\/(?!index)\S+.js$/)
let arr = ctx.keys().map(i => {
  let t = ctx(i).default
  
  if (typeof t === 'object' && t !== null) {
    t = Object.entries(t)

    if (t.length > 0) {
      let [k, v] = t.shift()

      return [k, v]
    }
  }

  return []
})

export default new Map(arr)
