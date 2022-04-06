<template>
  <a-tabs v-model:activeKey="activeKey" @change="(tab) => $router.push({query: {...$route.query, tab2: tab}})">
    <!--加载天地图-->
    <a-tab-pane key="LoadTianditu" tab="天地图">
      <LoadTianditu></LoadTianditu>
    </a-tab-pane>
    <!--加载百度地图-->
    <a-tab-pane key="LoadBaidu" tab="百度地图">
      <LoadBaidu></LoadBaidu>
    </a-tab-pane>
    <!--加载高德地图-->
    <a-tab-pane key="LoadAMap" tab="高德地图">
      <LoadAMap></LoadAMap>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    LoadTianditu: defineAsyncComponent(() => import('./LoadTianditu')),
    LoadBaidu: defineAsyncComponent(() => import('./LoadBaidu')),
    LoadAMap: defineAsyncComponent(() => import('./LoadAMap')),
  },
  setup (props, ctx) {
    const route = useRoute()
    const state = reactive({
      activeKey: route.query.tab2 || 'LoadTianditu'
    })
    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
</style>