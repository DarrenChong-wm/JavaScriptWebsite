import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Sorting from '../pages/Sorting.vue'

const routes = [
  {
    path: '',
    name: 'Main',
    component: Main
  },
  {
    path: '/sorting',
    name: 'Sorting',
    component: Sorting
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router