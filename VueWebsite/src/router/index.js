import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import BruteForce from '../pages/BruteForce.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/brute force',
    name: 'Brute Force',
    component: BruteForce
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router