import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blog-entries',
      name: 'blog-entries',
      component: () => import('../views/Blog-Entries.vue')
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/Contact-Us.vue')
    },
    {
      path: '/post-details',
      name: 'post-details',
      component: () => import('../views/Post-Details.vue')
    },
  ]
})

export default router
