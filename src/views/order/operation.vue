<template>
  <div class="m-4">
    <el-select
      v-model="value"
      value-key="name"
      placeholder="Select"
      @change="optionChange"
      style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.name"
        :label="item.name"
        :value="item"
        :disabled="item[disabledName]" />
    </el-select>
    <p>
      selected option's description:
      {{ value ? value : 'no select' }}
    </p>
    <el-select
      v-model="value"
      value-key="name"
      placeholder="Select"
      multiple
      @change="optionChange"
      style="width: 240px">
      <el-option
        v-for="item in acc"
        :key="item.name"
        :label="item.name"
        :value="item"
        :disabled="item[disabledName]" />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useOrdersStore } from '@/store/order'
  const OrderStore = useOrdersStore()

  const { options, acc, setDisabled } = OrderStore
  console.log('OrderStore', options)
  let props = defineProps(['disabledName', 'changeDisabledName', 'options'])

  const value = ref('')
  const optionChange = (val: any) => {
    console.log('optionChange', val)
    let belongs = Array.isArray(val)
      ? val.map((item) => item.belong)
      : [val.belong]
    console.log(belongs)
    setDisabled(props.changeDisabledName, belongs)
  }
</script>
