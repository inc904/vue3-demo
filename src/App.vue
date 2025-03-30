<script setup></script>

<template>
  <div class="menu">
    <RouterLink to="/v-list1">virtual-list-1</RouterLink>
    <RouterLink to="/v-list2">virtual-list-2</RouterLink>
  </div>
  <router-view />
</template>

<style>
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
  }
  #app {
    height: 100%;
  }
  .menu {
    display: flex;
    height: 40px;
    justify-content: space-around;
    align-items: center;
  }
</style>
