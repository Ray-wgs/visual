<template>
    <div class="vs-chart-container">
        <div class="vs-chart" :id="domId">

        </div>
    </div>
</template>

<script lang='ts' setup name="vsChart">
import { reactive, toRefs,ref,onMounted,PropType,watch} from 'vue'
import {v4 as uuid }from 'uuid'
import * as echarts from "echarts";
import chartApi from './componentsApi/chart'
interface obj {
    [key:string]:any
}
    const props = defineProps({
        // 配置图表的id
        chartId:{
            type:String
        },
        // 自定义图表的option
        option:{
            type:Object as PropType<obj>,
            default:()=>{}
        }
    })
    const {chartId,option} = toRefs(props)
    // 图表渲染用的配置项
    let chartOption= ref({})
    // 随机生成id 用于dom的获取
    const domId = `vs-chart-${uuid()}`
    let chart:echarts.EChartsType
    // echarts 初始化
    const init = ()=>{
        if(chart) chart.clear()
        chart = echarts.init(document.querySelector(`#${domId}`)as HTMLDivElement)
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
    let timer:number
    // 新增chart大小随动方法
    const rsOb = new ResizeObserver((e)=>{
        if(timer) clearTimeout(timer)
        timer = window.setTimeout(() => {
            try {
                chart.resize()
            } catch (error) {
                console.warn('chart重新设置大小失败')
            }
        }, 50);
    })
    // onMounted 钩子函数中获取dom并init echarts
    onMounted(()=>{
        init()
        rsOb.observe(document.querySelector(`#${domId}`) as Element)
    })
    watch(option,()=>{
        chartOption.value = option!.value as echarts.EChartsOption
        init()
    },{deep:true})
</script>
<style scoped lang='scss'>
.vs-chart-container{
    width: 100%;
    height:100%;
    .vs-chart{
        width: 100%;
        height:100%;
    }
}

</style>