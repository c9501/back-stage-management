<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref, nextTick, watch } from 'vue'
type EChartsOption = echarts.EChartsOption
const option = defineProps<{
  chartOption: EChartsOption
}>()

watch(
  option.chartOption,
  () => {
    chart && chart.setOption(option.chartOption)
  },
  {
    deep: true
  }
)

const chartRef = ref()
let chart: echarts.ECharts
onMounted(() => {
  // 实例化echarts对象, 并且指定渲染的画布
  chart = echarts.init(chartRef.value)
  // 渲染配置项数据
  chart.setOption(option.chartOption)

  // 监听浏览器的窗口变化, 让图表进行自适应
  window.addEventListener('resize', () => {
    nextTick(() => {
      chart && chart.resize()
    })
  })
})
</script>

<template>
  <div ref="chartRef"></div>
</template>

<style lang="scss" scoped></style>
