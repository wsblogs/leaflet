<template>
  <a-tabs default-active-key="base" tab-position="left">
    <a-tab-pane tab="base">
      <Base></Base>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components: {
    Base: defineAsyncComponent(() => import('./components/Base'))
  },
  setup (props, ctx) {
    const state = reactive({})
    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
.ant-tabs-vertical {
  height: 100%;

  ::v-deep(.ant-tabs-left-content) {
    height: 100%;
    overflow: auto;
  }
}
</style>