<template>
  <Leaflet :options="options" debug @create="onCreate"></Leaflet>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent, getCurrentInstance, createVNode } from 'vue'
import * as Leaflet from 'leaflet'
import hangzhouGeoJson from '@/components/Leaflet/geoJson/100000/330000/330100.geoJson'
import { createMap } from '@/components/Leaflet/libs/maps/tianditu'
import CustomPopInfo from './CustomPopInfo'
const {
  normalMapTileLayer, normalAnnotionTileLayer, satelliteMapTileLayer, satelliteAnnotionTileLayer, terrainMapTileLayer, terrainAnnotionTileLayer,
  normalLayerGroup, imageLayerGroup, terrainLayerGroup,
  baseLayers, overlayLayers,
} = createMap()
export default defineComponent({
  setup (props, ctx) {
    const instance = getCurrentInstance()
    const app = instance.appContext.app
    const state = reactive({
      options: {
        center: [30.16, 120.12],
        zoom: 12,
        //layers: [normalLayerGroup],
      },
      onCreate (map) {
        normalLayerGroup.addTo(map)
        Leaflet.control.layers(baseLayers, overlayLayers, {collapsed: false}).addTo(map)
        Leaflet.control.zoom({ zoomInTitle: '放大', zoomOutTitle: '缩小' }).addTo(map)
        // 加载geoJson https://leafletjs.cn/examples/choropleth/
        Leaflet.geoJSON(hangzhouGeoJson, {
          style(feature) {
            if (feature.properties.name === '余杭区') {
              return {
                color: '#800026',
                weight: 2,
                opacity: 1,
                dashArray: '3',
                fillOpacity: 0.7
              }
            }
            return {}
          },
          onEachFeature(feature, layer) {
            const container = document.createElement('div')
            if (feature.properties?.name) {
              //layer.bindPopup(feature.properties?.name)
              layer.bindPopup(container, {})
              layer.on('popupopen', e => {
                app.render(createVNode(CustomPopInfo, null, {
                  default: () => feature.properties?.name
                }), container)
              })
            }
          },
          filter(feature, layer) {
            return true
          }
        }).addTo(map)
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