import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/editor',
  },
  {
    path: '/editor',
    component: () => import('@/views/Editor/index.vue'),
  },
]

export function setupRouter (app: App) {
  app.use(router)
  // 创建路由守卫
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
