<template>
  <a-tabs v-model:activeKey="activeKey">
    <!--天地图-->
    <a-tab-pane key="DarkThemeMap" tab="天地图-暗黑色(leaflet.tilelayer.colorfilter)">
      <DarkThemeMap></DarkThemeMap>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components: {
    DarkThemeMap: defineAsyncComponent(() => import('./DarkThemeMap')),
  },
  setup (props, ctx) {
    const state = reactive({
      activeKey: 'DarkThemeMap'
    })
    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
</style>