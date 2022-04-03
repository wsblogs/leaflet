<template>
  <div ref="rootRef" class="leaflet"></div>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent, onMounted, markRaw } from 'vue'
import 'leaflet/dist/leaflet.css'
import * as Leaflet from 'leaflet'
// https://github.com/htoooth/Leaflet.ChineseTmsProviders
import 'leaflet.chinatmsproviders'

export default defineComponent({
  props: {
    mapSource: {
      type: String,
      default: 'tianditu'
    },
    options: [Object]
  },
  emits: ['create'],
  setup (props, ctx) {
    const state = reactive({
      map: null,
      rootRef: null
    })

    onMounted(async () => {
      const map = Leaflet .map(state.rootRef, {...props.options})
      state.map = markRaw(map)
      ctx.emit('create', map)
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