import * as Leaflet from 'leaflet'
// https://github.com/htoooth/Leaflet.ChineseTmsProviders
import 'leaflet.chinatmsproviders'
export function createMap() {
  // 初始化天地图
  const normalMapTileLayer = Leaflet.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
    key: import.meta.env.VITE_APP_TIANDITU_KEY,
    maxZoom: 18,
    minZoom: 5,
  })
  const normalAnnotionTileLayer = Leaflet.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
    key: import.meta.env.VITE_APP_TIANDITU_KEY,
    maxZoom: 18,
    minZoom: 5,
  })
  const satelliteMapTileLayer = Leaflet.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
    key: import.meta.env.VITE_APP_TIANDITU_KEY,
    maxZoom: 18,
    minZoom: 5,
  })
  const satelliteAnnotionTileLayer = Leaflet.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
    key: import.meta.env.VITE_APP_TIANDITU_KEY,
    maxZoom: 18,
    minZoom: 5,
  })
  const terrainMapTileLayer = Leaflet.tileLayer.chinaProvider('TianDiTu.Terrain.Map', {
    key: import.meta.env.VITE_APP_TIANDITU_KEY,
    maxZoom: 18,
    minZoom: 5,
  })
  const terrainAnnotionTileLayer = Leaflet.tileLayer.chinaProvider('TianDiTu.Terrain.Annotion', {
    key: import.meta.env.VITE_APP_TIANDITU_KEY,
    maxZoom: 18,
    minZoom: 5,
  })
  
  const normalLayerGroup = Leaflet.layerGroup([normalMapTileLayer, normalAnnotionTileLayer])
  const imageLayerGroup = Leaflet.layerGroup([satelliteMapTileLayer, satelliteAnnotionTileLayer])
  const terrainLayerGroup = Leaflet.layerGroup([terrainMapTileLayer, terrainAnnotionTileLayer])
  const baseLayers = {
    '地图': normalLayerGroup,
    '影像': imageLayerGroup, // 卫星地图
    '地形': terrainLayerGroup,
  }
  const overlayLayers = {}
  
  return {
    normalMapTileLayer, normalAnnotionTileLayer, satelliteMapTileLayer, satelliteAnnotionTileLayer, terrainMapTileLayer, terrainAnnotionTileLayer,
    normalLayerGroup, imageLayerGroup, terrainLayerGroup,
    baseLayers, overlayLayers,
  }
}