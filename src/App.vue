<template>
  <!-- <fixed-size-list
    inner-element="section"
    :useIsScrolling="true"
    :data="list"
    :total="list.length"
    :width="500"
    :height="50"
    :item-size="50"
    layout="horizontal"
  > -->
    <fixed-size-list
    inner-element="section"
    :useIsScrolling="true"
    :data="list"
    :total="list.length"
    :height="500"
    :item-size="50"
    :perf-mode="true"
  >
    <template #default="{ index, style }">
      <div :style="style">{{ index }}</div>
    </template>
  </fixed-size-list>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { FixedSizeList } from '@/components/virtual-list'
// import { FixedSizeList } from 'element-plus'
import ScrollBar from '@/components/scrollbar'

export default defineComponent({
  name: 'App',
  components: {
    FixedSizeList,
    ScrollBar,
  },
  setup() {
    const list = ref<number[]>([])
    for (let i = 0; i < 10000; i++) {
      list.value.push(i)
    }
    onMounted(() => {
      console.log(FixedSizeList)
    })

    const add = () => {
      for (let i = 0; i < 10; i++) {
        list.value.push(list.value.length + i)
      }
    }
    return {
      list,
      add,
    }
  },
})
</script>

<style lang="scss">
</style>
