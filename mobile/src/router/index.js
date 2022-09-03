import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // 使用hash(createWebHashHistory)模式，(createWebHistory是HTML5历史模式，支持SEO)
  history: createWebHashHistory(import.meta.env.BASE_URL), // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/adopt'
    },
    {
      path: '/adopt',
      name: 'adopt',
      component: () => import('../views/adopt.vue'),
      meta: {
        title: '领养'
      }
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: () => import('../views/knowledge.vue'),
      meta: {
        title: '知识'
      }
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('../views/me.vue'),
      meta: {
        title: '我的'
      }
    }
  ]
})

export default router
