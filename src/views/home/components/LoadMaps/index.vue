<template>
  <a-tabs default-active-key="LoadTianditu">
    <!--加载天地图-->
    <a-tab-pane key="LoadTianditu" tab="天地图">
      <LoadTianditu></LoadTianditu>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components: {
    LoadTianditu: defineAsyncComponent(() => import('./LoadTianditu'))
  },
  setup (props, ctx) {
    const state = reactive({})
    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
</style>