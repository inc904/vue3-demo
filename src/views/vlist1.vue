<template>
  <h2>固定高度的虚拟列表</h2>
  <hr />
  <div class="box">
    <VirtualList :listData="d" :itemSize="50" />
  </div>
</template>

<script setup>
  import VirtualList from '../components/virtual-list.vue'
  import d from '@/api/data.js'
</script>

<style lang="scss" scoped>
  .box {
    height: 500px;
  }
</style>
