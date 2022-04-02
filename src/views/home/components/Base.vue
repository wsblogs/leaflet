<template>
  <div v-for="i in 10000" :key="i">
    base {{ i }}
  </div>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  setup (props, ctx) {
    const state = reactive({})
    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
</style>