<template>
    <div class="vs-chart" :id="domId">

    </div>
</template>

<script lang='ts' setup name="vsChart">
import { reactive, toRefs,ref,onMounted,PropType} from 'vue'
import {v4 as uuid }from 'uuid'
import * as echarts from "echarts";
import chartApi from './componentsApi/chart'
    const props = defineProps({
        // 配置图表的id
        chartId:{
            type:String
        },
        // 自定义图表的option
        option:{
            type:Object as PropType<echarts.EChartsOption>
        }
    })
    const {chartId,option} = toRefs(props)
    // 图表渲染用的配置项
    let chartOption= ref({})
    // 随机生成id 用于dom的获取
    const domId = `vs-chart-${uuid()}`
    // echarts 初始化
    const init = ()=>{
        let chart = echarts.init(document.querySelector(`#${domId}`)as HTMLDivElement)
        chart.setOption(chartOption.value)
    }
    // 根据props 设置当前图表的配置项
    if(chartId?.value){
        chartApi.getChartOption({id:chartId.value})
        .then(res=>{
            const {code,data,msg} = res
            if(code == 0){
                chartOption.value = data
            }
        })
    }else{
        chartOption.value = option!.value as echarts.EChartsOption
        console.log(chartOption)
    }
    // onMounted 钩子函数中获取dom并init echarts
    onMounted(()=>{
        init()
    })
</script>
<style scoped lang='scss'>
.vs-chart{
    width: 100%;
    height:100%;
}
</style>