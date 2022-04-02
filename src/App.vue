<template>
  <router-view />
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  setup (props, ctx) {
    const state = reactive({})
    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  //text-align: center;
  //color: #2c3e50;
  //margin-top: 60px;
}
</style>
