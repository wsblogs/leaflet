<template>
  <Leaflet :options="options" @create="onCreate"></Leaflet>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent } from 'vue'
import * as Leaflet from 'leaflet'
import { createMap } from '@/components/Leaflet/libs/maps/baidu'
const {
  normalMapTileLayer, satelliteMapTileLayer, satelliteAnnotionTileLayer,
  baseLayers, overlayLayers,
} = createMap()

export default defineComponent({
  setup (props, ctx) {
    const state = reactive({
      options: {
        crs: L.CRS.Baidu,
        center: [30.16, 120.12],
        zoom: 12,
        //layers: [normalMapTileLayer],
      },
      onCreate (map) {
        normalMapTileLayer.addTo(map)
        Leaflet.control.layers(baseLayers, overlayLayers).addTo(map)
        Leaflet.control.zoom({ zoomInTitle: '放大', zoomOutTitle: '缩小' }).addTo(map)
      },
    })
    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
.leaflet {
  height: 800px;
}
</style>