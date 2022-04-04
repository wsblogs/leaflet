import * as Leaflet from 'leaflet'
// https://github.com/htoooth/Leaflet.ChineseTmsProviders
import 'leaflet.chinatmsproviders'
export function createMap() {
  const normalMapTileLayer = Leaflet.tileLayer.chinaProvider('GaoDe.Normal.Map', {
    //key: import.meta.env.VITE_APP_MAP_BAIDU_KEY,
    maxZoom: 18,
    minZoom: 5,
  })
  const satelliteMapTileLayer = Leaflet.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
    //key: import.meta.env.VITE_APP_MAP_BAIDU_KEY,
    maxZoom: 18,
    minZoom: 5,
  })
  const satelliteAnnotionTileLayer = Leaflet.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
    //key: import.meta.env.VITE_APP_MAP_BAIDU_KEY,
    maxZoom: 18,
    minZoom: 5,
  })
  
  const normalLayerGroup = Leaflet.layerGroup([normalMapTileLayer])
  const imageLayerGroup = Leaflet.layerGroup([satelliteMapTileLayer, satelliteAnnotionTileLayer])
  
  const baseLayers = {
    '地图': normalLayerGroup,
    '影像': imageLayerGroup, // 卫星地图
  }
  const overlayLayers = {}
  
  return {
    normalMapTileLayer, satelliteMapTileLayer, satelliteAnnotionTileLayer,
    normalLayerGroup, imageLayerGroup,
    baseLayers, overlayLayers,
  }
}