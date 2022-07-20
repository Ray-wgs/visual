<template>
    <template v-for="name in data" :key="name">
        <vs-chart-panel-opt :templateOpt="templateOpt[name]" />
    </template>
</template>

<script lang='ts' setup name="vsChartCommonOpt">
import { reactive, toRefs,ref,PropType,watchEffect} from 'vue'
import templateOpt from '../config/index'
import vsChartPanelOpt from './ChartPanelOpt.vue'
import barSeries from '../config/bar.series.template'
import lineSeries from '../config/line.series.template'
import pieSeries from '../config/pie.series.template'
import { useChartStore } from '@/stores/chart';
import { storeToRefs } from 'pinia';
import {flatten, seriesTotemplate} from '@/utils/func'
const props = defineProps({
    type:{
        type:String,
        default:'bar'
    }
})
const store = useChartStore()
const {chartOpt} = storeToRefs(store)
chartOpt.value.flattenOption = flatten(chartOpt.value.option)
templateOpt.series = seriesTotemplate(chartOpt.value.option.series,templateOpt.series)
const {type} = toRefs(props)
const data =ref<string[]>([])

watchEffect(()=>{
    switch (type.value) {
        case 'bar':
            data.value = ['title','legend','tooltip','xAxis','yAxis','series']
            templateOpt.series = seriesTotemplate(chartOpt.value.option.series,barSeries.series)
            break;
        case 'line':
            data.value = ['title','legend','tooltip','xAxis','yAxis','series']
            templateOpt.series = seriesTotemplate(chartOpt.value.option.series,lineSeries.series)
            break;
        case 'pie':
            data.value = ['title','legend','tooltip','series']
            templateOpt.series = seriesTotemplate(chartOpt.value.option.series,pieSeries.series)
            break;
        default:
            break;
    }
})
</script>
<style scoped lang='scss'>
</style>