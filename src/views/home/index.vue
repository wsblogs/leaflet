<template>
  <a-tabs v-model:activeKey="activeKey" tab-position="left">
    <a-tab-pane key="BaseMap" tab="基础">
      <BaseMap></BaseMap>
    </a-tab-pane>
    <a-tab-pane key="LoadMaps" tab="加载地图">
      <LoadMaps></LoadMaps>
    </a-tab-pane>
    <a-tab-pane key="ThemeMaps" tab="主题色地图">
      <ThemeMaps></ThemeMaps>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components: {
    BaseMap: defineAsyncComponent(() => import('./components/BaseMap')),
    LoadMaps: defineAsyncComponent(() => import('./components/LoadMaps')),
    ThemeMaps: defineAsyncComponent(() => import('./components/ThemeMaps')),
  },
  setup (props, ctx) {
    const state = reactive({
      activeKey: 'BaseMap'
    })
    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
.ant-tabs-vertical {
  height: 100%;

  ::v-deep(.ant-tabs-left-content) {
    height: 100%;
    padding-right: 15px;
    overflow: auto;
  }
}
</style>