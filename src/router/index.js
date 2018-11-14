import Vue from 'vue'
import VueRouter from 'vue-router'

// 生成 VueRouter 实例前必须在 Vue 上安装 vuex 插件
Vue.use(VueRouter)

import example from './example'

const homeComponent = () => import('components/pages/home.vue')

const routes = [
  {
    path: '/',
    redirectTo: { name: 'home' },
  },
  {
    component: homeComponent,
    name: 'home',
    path: '/home',
  }
]
  .concat(example)

export default new VueRouter({
  routes,
})