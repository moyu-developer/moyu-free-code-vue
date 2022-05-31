<template>
  <div class="nav-bar-wrapper">
    <div class="logo">
      <a-space>
        <img src="https://www.antdv.com/assets/logo.1ef800a8.svg" alt="" />
        <span>摸大鱼</span>
      </a-space>
    </div>
    <div class="function">
      <a-space>
        <a-button type="text">
          <template #icon>
            <DesktopOutlined />
          </template>
          工作台
        </a-button>
        <a-button type="text">
          <template #icon>
            <ShopOutlined />
          </template>
          模板市场
        </a-button>
        <a-button type="text">
          <template #icon>
            <DatabaseFilled />
          </template>
          数据源
        </a-button>
      </a-space>
    </div>
    <div class="user">
      <a-space :size="16">
        <a-button type="text">
          <template #icon>
            <BugOutlined />
          </template>
        </a-button>
        <a-button type="text">
          <template #icon>
            <RobotFilled />
          </template>
        </a-button>
        <a-button type="text">
          <template #icon>
            <GithubOutlined />
          </template>
        </a-button>
        <a-avatar>
          <template #icon>
            <AntDesignOutlined />
          </template>
        </a-avatar>
      </a-space>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  DesktopOutlined,
  ShopOutlined,
  DatabaseFilled,
  BugOutlined,
  RobotFilled,
  GithubOutlined,
  AntDesignOutlined,
} from '@ant-design/icons-vue'
</script>
<style lang="less" scoped>
.nav-bar-wrapper {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;

  .logo {
    width: 200px;
    height: 32px;
    cursor: pointer;

    img {
      width: 32px;
      object-fit: contain;
    }

    span {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .function {
    // flex: 1;
    width: 400px;
  }

  .user {
    width: 200px;
    text-align: right;
  }
}
</style>
