<template>
  <Leaflet @create="onCreate" :options="options"></Leaflet>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent } from 'vue'
import * as Leaflet from 'leaflet'

export default defineComponent({
  setup (props, ctx) {
    // 初始化天地图
    const normalm = Leaflet.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
      key: import.meta.env.VITE_APP_TIANDITU_KEY,
      maxZoom: 18,
      minZoom: 5,
    })
    const normala = Leaflet.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
      key: import.meta.env.VITE_APP_TIANDITU_KEY,
      maxZoom: 18,
      minZoom: 5,
    })
    const imgm = Leaflet.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
      key: import.meta.env.VITE_APP_TIANDITU_KEY,
      maxZoom: 18,
      minZoom: 5,
    })
    const imga = Leaflet.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
      key: import.meta.env.VITE_APP_TIANDITU_KEY,
      maxZoom: 18,
      minZoom: 5,
    })
    const normal = L.layerGroup([normalm, normala])
    const image = L.layerGroup([imgm, imga])
    const baseLayers = {
      '地图': normal,
      '影像': image,
    }
    const overlayLayers = {}

    const state = reactive({
      options: {
        center: [30.16, 120.12],
        zoom: 12,
        layers: [normal],
        zoomControl: false
      },
      onCreate (map) {
        console.log(111, 'create leaflet', map)
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