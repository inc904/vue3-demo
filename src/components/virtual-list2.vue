<template>
  <!-- <div class="container" ref="virtualList">
    <div class="phantom"></div>
    <div class="content" ref="content">
      <div v-for="item in visibleData" :key="item.id" :id="item.id" ref="items">
        {{ item.value }}
      </div>
    </div>
  </div> -->
  <defer />
</template>

<script setup>
  import defer from './defer.vue'
</script>

<style lang="scss" scoped></style>
