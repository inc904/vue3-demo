<template>
  <div
    ref="listRef"
    class="infinite-list-container"
    @scroll="handleScroll($event)">
    <div
      class="infinite-list-phantom"
      :style="{ height: listHeight + 'px' }"></div>
    <div class="infinite-list" :style="{ transform: getTransform }">
      <div ref="items" class="infinite-list-item" v-for="item in visibleData">
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  let listRef = ref(null)
  // 可视区域高度
  let screenHeight = ref(window.screen.height || 0)
  // 偏移量
  const startOffset = ref(0)
  // 起始索引
  const start = ref(0)
  // 结束索引
  const end = ref(0)
  const props = defineProps({
    // 列表数据
    listData: {
      type: Array,
      default: () => [],
    },
    // 每项高度
    itemSize: {
      type: Number,
      default: 0,
    },
  })
  console.log(props)

  // 列表总高度
  const listHeight = computed(() => {
    return props.listData.length * props.itemSize
  })
  // 可显示的列表项数
  const visibleCount = computed(() => {
    return Math.ceil(screenHeight.value / props.itemSize)
  })
  // 偏移量对应的 style
  const getTransform = computed(() => {
    return `translate3d(0, ${startOffset.value}px, 0)`
  })
  // 获取真实显示列表
  const visibleData = computed(() => {
    return props.listData.slice(
      start.value,
      Math.min(end.value, props.listData.length)
    )
  })
  const handleScroll = () => {
    // 当前滚动位置
    let scrollTop = listRef.value.scrollTop
    // 此时开始的索引
    start.value = Math.floor(scrollTop / props.itemSize)
    // 此时结束的索引
    end.value = start.value + visibleCount.value
    // 偏移量
    startOffset.value = scrollTop - (scrollTop % props.itemSize)
    console.log(
      'scrollTop:',
      scrollTop,
      props.itemSize,
      scrollTop % props.itemSize
    )
  }

  onMounted(() => {
    screenHeight.value = document.documentElement.clientHeight
    handleScroll()
  })
</script>

<style lang="scss" scoped>
  .infinite-list-container {
    height: 100%;
    overflow: auto;
    position: relative;
    -webkit-overflow-scrolling: touch;
  }

  .infinite-list-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }

  .infinite-list {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    text-align: center;
  }

  .infinite-list-item {
    height: 50px;
    padding: 10px;
    color: #555;
    box-sizing: border-box;
    border-bottom: 1px solid #999;
  }
</style>
