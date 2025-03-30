import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrdersStore = defineStore('order', () => {
  const options = ref([
    { name: 'testA', belong: 'testA', disabledA: true, disabledB: false },
    { name: 'testB', belong: 'testB', disabledA: false, disabledB: true },
    { name: 'testC', belong: 'testC', disabledA: false, disabledB: false },
    { name: 'testD', belong: 'testD', disabledA: false, disabledB: false },
    { name: 'testE', belong: 'testE', disabledA: false, disabledB: false },
  ])

  const acc = ref([
    { name: 'Jack1', belong: 'testA', disabledA: false, disabledB: false },
    { name: 'Jack2', belong: 'testA', disabledA: false, disabledB: false },
    { name: 'Jack3', belong: 'testB', disabledA: false, disabledB: false },
    { name: 'Jack4', belong: 'testC', disabledA: false, disabledB: false },
  ])

  const setDisabled = (comp, belongs, type) => {
    console.log(comp, belongs)

    options.value.forEach((item) => {
      console.log(
        'setDisabled-group',
        item.belong,
        belongs,
        belongs.includes(item.belong)
      )
      item.disabledA =
        belongs.includes(item.belong) && comp === 'disabledA' ? true : false
      item.disabledB =
        belongs.includes(item.belong) && comp === 'disabledB' ? true : false
    })

    acc.value.forEach((item) => {
      console.log(
        'setDisabled-acc',
        item.belong,
        belongs,
        belongs.includes(item.belong)
      )
      item.disabledA =
        belongs.includes(item.belong) && comp === 'disabledA' ? true : false
      item.disabledB =
        belongs.includes(item.belong) && comp === 'disabledB' ? true : false
    })
  }
  // setDisabled('disabledB', 'testA')
  return {
    options,
    acc,
    setDisabled,
  }
})
