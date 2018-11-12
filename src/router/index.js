import VueRouter from 'vue-router'

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