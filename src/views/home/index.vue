<template>
  <a-tabs v-model:activeKey="activeKey" tab-position="left" @change="(tab) => $router.push({query: {...$route.query, tab1: tab}})">
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
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    BaseMap: defineAsyncComponent(() => import('./components/BaseMap')),
    LoadMaps: defineAsyncComponent(() => import('./components/LoadMaps')),
    ThemeMaps: defineAsyncComponent(() => import('./components/ThemeMaps')),
  },
  setup (props, ctx) {
    const route = useRoute()
    const state = reactive({
      activeKey: route.query.tab1 || 'BaseMap'
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