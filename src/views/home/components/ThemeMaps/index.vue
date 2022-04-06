<template>
  <a-tabs v-model:activeKey="activeKey" @change="(tab) => $router.push({query: {...$route.query, tab2: tab}})">
    <!--天地图-->
    <a-tab-pane key="DarkThemeMap" tab="天地图-暗黑色(leaflet.tilelayer.colorfilter)">
      <DarkThemeMap></DarkThemeMap>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    DarkThemeMap: defineAsyncComponent(() => import('./DarkThemeMap')),
  },
  setup (props, ctx) {
    const route = useRoute()
    const state = reactive({
      activeKey: route.query.tab2 || 'DarkThemeMap'
    })
    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
</style>