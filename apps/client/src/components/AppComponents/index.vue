<template>
  <div class="app-my-components-wrapper">
    <div class="header">我的组件</div>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="内置组件">
        <a-empty />
      </a-tab-pane>
      <a-tab-pane key="2" tab="远程组件">
        <a-empty />
      </a-tab-pane>
      <a-tab-pane key="3" tab="自定义组件">
        <a-empty />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const activeKey = ref('1')
</script>
<style lang="less" scoped>
.app-my-components-wrapper {
  .header {
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
  }
  padding: 0 12px;
}
</style>
