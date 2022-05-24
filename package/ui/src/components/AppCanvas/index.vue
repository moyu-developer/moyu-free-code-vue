<template>
  <div class="app-canvas-wrapper">
    <div class="header">
      <a-select v-model:value="layoutValue" style="width: 120px">
        <a-select-option value="grid">网格布局</a-select-option>
        <a-select-option value="flow">流式布局</a-select-option>
      </a-select>

      <div class="control-wrap">
        <a-space>
          <div class="tools">
            <a-button type="text">
              <template #icon>
                <LeftOutlined />
              </template>
            </a-button>
            <a-button type="text">
              <template #icon>
                <RightOutlined />
              </template>
            </a-button>
            <a-button type="text">
              <template #icon>
                <PlusOutlined />
              </template>
            </a-button>
            <a-button type="text">
              <template #icon>
                <MinusOutlined />
              </template>
            </a-button>
          </div>
        </a-space>
      </div>

      <div class="action-buttons">
        <a-space>
          <a-button type="text">
            <template #icon>
              <ShareAltOutlined />
            </template>
          </a-button>
          <a-button type="text">
            <template #icon>
              <SaveOutlined />
            </template>
          </a-button>
          <a-button type="primary">
            <template #icon>
              <SendOutlined />
            </template>
            发布
          </a-button>
        </a-space>
      </div>
    </div>
    <div class="canvas-editor"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {
  SendOutlined,
  SaveOutlined,
  LeftOutlined,
  RightOutlined,
  PlusOutlined,
  MinusOutlined,
  ShareAltOutlined,
} from '@ant-design/icons-vue'

const layoutValue = ref('grid')
</script>
<style lang="less" scoped>
.app-canvas-wrapper {
  .header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
  }

  padding: 0 12px;

  .canvas-editor {
    width: 100%;
    height: calc(100vh - 111px);
    background: #eee;
  }

  .control-wrap {
    .tools {
      width: 130px;
      background-color: rgb(246, 253, 255);
      border-radius: 10px;
      color: blue;
    }
  }
}
</style>
