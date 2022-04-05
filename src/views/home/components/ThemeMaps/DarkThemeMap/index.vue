<template>
  <Leaflet :options="options" @create="onCreate"></Leaflet>
  <div class="flex-layout">
    <div class="left-panel" style="align-items: flex-start;">
      <ConfigPanel :options="filterOptions"></ConfigPanel>
      <JsonView :data="computedFilterOptions"></JsonView>
    </div>
  </div>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent, defineAsyncComponent, computed, watch } from 'vue'
import * as Leaflet from 'leaflet'
// 瓦片颜色过滤器插件 https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter
import 'leaflet.tilelayer.colorfilter'

const normalMapTileLayer = Leaflet.tileLayer.colorFilter(Leaflet.TileLayer.ChinaProvider.providers.TianDiTu.Normal.Map.replace('{key}', import.meta.env.VITE_APP_MAP_TIANDITU_KEY), {
  subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  maxZoom: 18,
  minZoom: 5,
  //filter: [
  //  'hue:180deg',
  //  'invert:100%',
  //]
})
const normalAnnotionTileLayer = Leaflet.tileLayer.colorFilter(Leaflet.TileLayer.ChinaProvider.providers.TianDiTu.Normal.Annotion.replace('{key}', import.meta.env.VITE_APP_MAP_TIANDITU_KEY), {
  subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  key: import.meta.env.VITE_APP_MAP_TIANDITU_KEY,
  maxZoom: 18,
  minZoom: 5,
  //filter: [
  //  'grayscale:100%',
  //  'invert:100%',
  //]
})
const normalLayerGroup = Leaflet.layerGroup([normalMapTileLayer, normalAnnotionTileLayer])

export default defineComponent({
  components: {
    ConfigPanel:  defineAsyncComponent(() => import('./ConfigPanel'))
  },
  setup (props, ctx) {
    const state = reactive({
      filterOptions: {
        blur: 0,
        brightness: 100,
        contrast: 100,
        grayscale: 0,
        'hue-rotate': 180,
        opacity: 100,
        invert: 100,
        saturate: 100,
        sepia: 0,
      },
      computedFilterOptions: computed(() => {
        return [
          `blur:${state.filterOptions.blur}px`,
          `brightness:${state.filterOptions.brightness}%`,
          `contrast:${state.filterOptions.contrast}%`,
          `grayscale:${state.filterOptions.grayscale}%`,
          `hue-rotate:${state.filterOptions['hue-rotate']}deg`,
          `opacity:${state.filterOptions.opacity}%`,
          `invert:${state.filterOptions.invert}%`,
          `saturate:${state.filterOptions.saturate}%`,
          `sepia:${state.filterOptions.sepia}%`
        ]
      }),
      options: {
        center: [30.16, 120.12],
        zoom: 12,
        layers: [normalLayerGroup],
      },
      onCreate (map) {
        Leaflet.control.zoom({ zoomInTitle: '放大', zoomOutTitle: '缩小' }).addTo(map)
      },
    })

    watch(() => state.computedFilterOptions, nv => {
      normalMapTileLayer.updateFilter(nv)
      normalAnnotionTileLayer.updateFilter(nv)
    }, {immediate: true})

    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
.leaflet {
  height: 800px;
}
</style>