<template>
  <a-card style="width: 500px;">
    <a-form :form="options" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
      <a-form-item name="blur" label="blur">
        <a-input-number v-model:value="options.blur"></a-input-number>
      </a-form-item>
      <a-form-item name="brightness" label="brightness">
        <a-slider v-model:value="options.brightness" style="display: inline-block;width: 200px;"></a-slider>
      </a-form-item>
      <a-form-item name="contrast" label="contrast">
        <a-slider v-model:value="options.contrast" style="display: inline-block;width: 200px;"></a-slider>
      </a-form-item>
      <a-form-item name="grayscale" label="grayscale">
        <a-slider v-model:value="options.grayscale" style="display: inline-block;width: 200px;"></a-slider>
      </a-form-item>
      <a-form-item name="hue-rotate" label="hue-rotate">
        <a-input-number v-model:value="options['hue-rotate']"></a-input-number>
      </a-form-item>
      <a-form-item name="opacity" label="opacity">
        <a-slider v-model:value="options.opacity" style="display: inline-block;width: 200px;"></a-slider>
      </a-form-item>
      <a-form-item name="invert" label="invert">
        <a-slider v-model:value="options.invert" style="display: inline-block;width: 200px;"></a-slider>
      </a-form-item>
      <a-form-item name="saturate" label="saturate">
        <a-slider v-model:value="options.saturate" style="display: inline-block;width: 200px;"></a-slider>
      </a-form-item>
      <a-form-item name="sepia" label="sepia">
        <a-slider v-model:value="options.sepia" style="display: inline-block;width: 200px;"></a-slider>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script lang='jsx'>
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  setup (props, ctx) {
    const state = reactive({})
    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
.ant-form-item {
  margin-bottom: 5px;
}
</style>