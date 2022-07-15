<template>
    <template v-for="name in data" :key="name">
        <vs-chart-panel-opt :templateOpt="templateOpt[name]" />
    </template>
</template>

<script lang='ts' setup name="vsChartCommonOpt">
import { reactive, toRefs,ref,PropType} from 'vue'
import templateOpt from '@/assets/json/chartOpt/index'
import vsChartPanelOpt from './ChartPanelOpt.vue'
const props = defineProps({
    data:{
        type:Array<string>,
        default:()=>['title','legend','tooltip','xAxis','yAxis']
    }
})
const {data} = toRefs(props)
</script>
<style scoped lang='scss'>
</style>