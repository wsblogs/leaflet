<template>
  <div>
    <p>Vue Component</p>
    <p>
      <slot></slot>
    </p>
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