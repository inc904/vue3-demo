<template>
  <div class="container">
    <div v-for="n in 100" :key="n">
      //这里通过重复的大组件来实现效果
      <heavyComp v-if="defer(n)"></heavyComp> //当 defer 返回 true
      代表组件加载的时机
    </div>
  </div>
</template>

<script setup>
  import heavyComp from '@/components/heavyComp.vue'
  import { useDefer } from '@/utils/useDefer'
  const defer = useDefer(100)
</script>

<style lang="scss" scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
</style>
