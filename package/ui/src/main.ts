import { createApp } from 'vue'
import Antd from 'ant-design-vue'

import '@/assets/less/index.less'

import App from './App.vue'

import router, { setupRouter } from './router'
import { setupStore } from '@/store'

async function bootstrap () {
  const app = createApp(App)

  app.use(Antd)

  // 挂载状态管理
  setupStore(app)

  // 挂载路由
  await setupRouter(app)

  // 路由准备就绪后挂载APP实例
  await router.isReady()

  app.mount('#app', true)
}

bootstrap()
