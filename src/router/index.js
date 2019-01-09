import Vue from 'vue'
import VueRouter from 'vue-router'

// 生成 VueRouter 实例前必须在 Vue 上安装 vuex 插件
Vue.use(VueRouter)

const homeComponent = () => import('src/components/pages/home.vue')

const routes = importRoutes([
  {
    path: '/',
    redirectTo: { name: 'home' },
  },
  {
    component: homeComponent,
    name: 'home',
    path: '/home',
  }
])

/**
 * 自动加载路由
 * @param {Array} routes 根路由
 */
function importRoutes (routes) {
  const ctx = require.context('./', true, /^\.\/(?!index)\S+\.js$/)
  
  for (let i of ctx.keys()) {
    routes = routes.concat(ctx(i).default)
  }

  return routes
}

export default new VueRouter({
  routes,
})
