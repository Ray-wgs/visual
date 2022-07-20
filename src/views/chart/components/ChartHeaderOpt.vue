<template>
    <div class="vs-chart-header-container">
        <div class="chart-type">
            <span style="margin-right:12px">选择图表类型</span>
            <el-select v-model="chartOpt.type" @change="onSelectEx">
                <el-option
                label="饼图"
                value="pie"
                >

                </el-option>
                <el-option
                label="折线图"
                value="line"
                >

                </el-option>
                <el-option
                label="柱状图"
                value="bar"
                >

                </el-option>
            </el-select>   
        </div> 
        <div class="chart-name">
            <span style="margin-right:12px">输入图表名称</span>
            <el-input v-model="chartOpt.name" style="width:200px"></el-input>
        </div> 
        <div class="chart-opt">
            <el-button @click="onSave">
                    保存
            </el-button>
        </div>
    </div>
</template>

<script lang='ts' setup name="vsChartHeaderOpt">
import { reactive, toRefs,ref} from 'vue'
import { useChartStore } from '@/stores/chart';
import { storeToRefs } from 'pinia';
import examples from '../config/example/index'
import {flatten} from '@/utils/func'
const store = useChartStore()
const {chartOpt} = storeToRefs(store)
const onSelectEx = ()=>{
    chartOpt.value.option = examples[chartOpt.value.type]
    chartOpt.value.flattenOption = flatten(examples[chartOpt.value.type])
}
const onSave = ()=>{
    console.log(chartOpt.value)
}
</script>
<style scoped lang='scss'>
.vs-chart-header-container{
    width: 100%;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .chart-name{
        width: 400px;
    }
}
</style>