<template>
  <div>order page</div>
  <div class="order-list">
    <operation disabledName="disabledA" changeDisabledName="disabledB" />
    <operation disabledName="disabledB" changeDisabledName="disabledA" />
  </div>
</template>

<script setup>
  import operation from './operation.vue'
</script>

<style lang="scss" scoped>
  .order-list {
    display: flex;
    justify-content: space-around;
  }
</style>
