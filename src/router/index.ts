import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/devices',
      name: 'devices',
      component: () => import('../views/DevicesView.vue')
    },
    {
      path: '/mediaplayers',
      name: 'mediaplayers',
      component: () => import('../views/mediaPlayers.vue')
    }
  ]
})

export default router
