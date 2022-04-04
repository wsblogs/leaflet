import * as Leaflet from 'leaflet'
// https://github.com/htoooth/Leaflet.ChineseTmsProviders
import 'leaflet.chinatmsproviders'
export function createMap() {
  const normalMapTileLayer = Leaflet.tileLayer.chinaProvider('Baidu.Normal.Map', {
    //key: import.meta.env.VITE_APP_MAP_BAIDU_KEY,
    maxZoom: 18,
    minZoom: 5,
  })
  const satelliteMapTileLayer = Leaflet.tileLayer.chinaProvider('Baidu.Satellite.Map', {
    //key: import.meta.env.VITE_APP_MAP_BAIDU_KEY,
    maxZoom: 18,
    minZoom: 5,
  })
  const satelliteAnnotionTileLayer = Leaflet.tileLayer.chinaProvider('Baidu.Satellite.Annotion', {
    //key: import.meta.env.VITE_APP_MAP_BAIDU_KEY,
    maxZoom: 18,
    minZoom: 5,
  })
  
  const baseLayers = {
    '地图': normalMapTileLayer,
    '影像': satelliteMapTileLayer, // 卫星地图
  }
  const overlayLayers = {
    '标注': satelliteAnnotionTileLayer
  }
  
  return {
    normalMapTileLayer, satelliteMapTileLayer, satelliteAnnotionTileLayer,
    baseLayers, overlayLayers,
  }
}