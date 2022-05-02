import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'kan-home',
    component: Home
  },
  {
    path: '/about',
    name: 'kan-about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/boards',
    name: 'kan-boards',
    component: () => import('../views/Boards.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
