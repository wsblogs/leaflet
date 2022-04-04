<template>
  <a-tabs v-model:activeKey="activeKey">
    <!--加载天地图-->
    <a-tab-pane key="LoadTianditu" tab="天地图">
      <LoadTianditu></LoadTianditu>
    </a-tab-pane>
    <!--加载百度地图-->
    <a-tab-pane key="LoadBaidu" tab="百度地图">
      <LoadBaidu></LoadBaidu>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components: {
    LoadTianditu: defineAsyncComponent(() => import('./LoadTianditu')),
    LoadBaidu: defineAsyncComponent(() => import('./LoadBaidu')),
  },
  setup (props, ctx) {
    const state = reactive({
      activeKey: 'LoadTianditu'
    })
    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
</style>