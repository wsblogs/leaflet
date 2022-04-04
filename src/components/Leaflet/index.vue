<template>
  <div ref="rootRef" class="leaflet"></div>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent, markRaw, onMounted, onUnmounted } from 'vue'
import 'leaflet/dist/leaflet.css'
import * as Leaflet from 'leaflet'

export default defineComponent({
  props: {
    options: [Object],
    debug: [Boolean],
  },
  emits: ['create'],
  setup (props, ctx) {
    const state = reactive({
      map: null,
      rootRef: null,
    })

    onMounted(async () => {
      const map = Leaflet.map(state.rootRef, {
        zoomControl: false, //禁用 + - 按钮
        doubleClickZoom: false, // 禁用双击放大
        attributionControl: false, // 移除右下角leaflet标识
        ...props.options
      })
      state.map = markRaw(map)

      if (props.debug) {
        state.map.on('zoomend', e => {
          // 获取当前放大或者缩小的等级
          const scale = e.target.getZoom()
          console.debug('map zoom level: {}', scale)
        })

        state.map.on('click', e => {
          console.debug('click map at', e.latlng)
        })

        // 获取用户地理位置回调 https://leafletjs.cn/examples/mobile/
        map.locate({ setView: true, maxZoom: 16, })
        map.on('locationfound', e => {
          console.debug(`获取用户当前位置成功`)
          const radius = e.accuracy
          Leaflet.marker(e.latlng).addTo(map)
          .bindPopup(`您在当前位置${ radius }米内`)
          //.openPopup()
          Leaflet.circle(e.latlng, radius).addTo(map)
        })
        map.on('locationerror', e => {
          console.debug(`获取用户当前位置失败`, e.message)
        })
      }

      ctx.emit('create', map)
    })

    onUnmounted(() => {
      state.map?.remove()
    })

    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
.leaflet {
  width: 100%;
  height: 100%;
}
</style>