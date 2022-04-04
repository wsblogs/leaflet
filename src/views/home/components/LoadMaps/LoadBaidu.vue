<template>
  <Leaflet :options="options" @create="onCreate"></Leaflet>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent } from 'vue'
import * as Leaflet from 'leaflet'
// this L.CRS.Baidu from https://github.com/muyao1987/leaflet-tileLayer-baidugaode/blob/master/src/tileLayer.baidu.js
import 'proj4leaflet'
// https://github.com/htoooth/Leaflet.ChineseTmsProviders
import 'leaflet.chinatmsproviders'

// 从leaflet.chinatmsproviders中拷贝
if (L.Proj) {
  L.CRS.Baidu = new L.Proj.CRS('EPSG:900913', '+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs', {
    resolutions: function () {
      const level = 19
      const res = [];
      res[0] = Math.pow(2, 18);
      for (let i = 1; i < level; i++) {
        res[i] = Math.pow(2, (18 - i))
      }
      return res;
    }(),
    origin: [0, 0],
    bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
  });
}

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
        layers: [normalMapTileLayer],
      },
      onCreate (map) {
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