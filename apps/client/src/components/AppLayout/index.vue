<template>
  <div class="layout-wrapper">
    <header>
      <NavBar class="nav-bar" />
    </header>
    <section class="content-wrapper">
      <a-row>
        <a-col :span="4">
          <AppComponents />
        </a-col>
        <a-col :span="16">
          <AppCanvas />
        </a-col>
        <a-col :span="4">
          <AppPanel/>
        </a-col>
      </a-row>
    </section>
  </div>
</template>
<script lang="ts" setup>
import NavBar from '../NavBar/index.vue'
import AppCanvas from '../AppCanvas/index.vue'
import AppPanel from '../AppPanel/index.vue'
import AppComponents from '../AppComponents/index.vue'
</script>
<style lang="less" scoped>
.layout-wrapper {
  width: 100%;
  height: 100%;

  header {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #eee;
  }
  .content-wrapper {
    // display: flex;
  }
}
</style>
