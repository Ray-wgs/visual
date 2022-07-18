<template>
    <div class="vs-chart-opt-container">
        <div class="vs-chart-header">
            <el-select v-model="type" @change="onSelectEx">
                <el-option
                label="pie"
                value="pie"
                >

                </el-option>
                <el-option
                label="line"
                value="line"
                >

                </el-option>
                <el-option
                label="bar"
                value="bar"
                >

                </el-option>
            </el-select>
        </div>
        <div class="vs-chart-warp">
            <div class="vs-chart-style">
                <el-form :model="chartOpt.option" label-width="150px" label-position="top">
                    <vs-chart-common-opt :type='type'/> 
                </el-form>
            </div>
            <div class="vs-chart-view">
                <vs-chart :option='chartOpt.option' />
            </div>
            <div class="vs-chart-data">
                <vs-code-mirror class="vs-chart-data-option" readonly  :modelValue="JSON.stringify(chartOpt.option,null,4)"></vs-code-mirror>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup name="vsChartContainer">
import { reactive, toRefs,ref,watch} from 'vue'
import vsChartCommonOpt from '@/components/chartOpt/CommonOpt.vue'
import { useChartStore } from '@/stores/chart';
import { storeToRefs } from 'pinia';
import {flatten,unflatten} from '@/utils/func'
import examples from '@/assets/json/chartOpt/example/index'
const store = useChartStore()
const {chartOpt} = storeToRefs(store)
const type = ref('bar')
const onSelectEx = ()=>{
    chartOpt.value.option = examples[type.value]
    chartOpt.value.flattenOption = flatten(examples[type.value])
}
chartOpt.value.option = examples[type.value]
chartOpt.value.flattenOption = flatten(examples[type.value])
watch(()=>chartOpt.value.flattenOption,()=>{
    chartOpt.value.option = {...chartOpt.value.option,...unflatten(chartOpt.value.flattenOption)}
},{deep:true})
</script>
<style scoped lang='scss'>
.vs-chart-opt-container{
    width: 100%;
    height:100vh;
    .vs-chart-header{
        width: 100%;
        height:50px;
        line-height: 50px;
        margin-bottom:10px;
    }
    .vs-chart-warp{
        display: flex;
        width: 100%;
        height:calc(100% - 60px);
        .vs-chart-style{
            width: 320px;
            height: 100%;
            box-shadow: 0 0 6px 2px #ccc;
            overflow-y:auto;
            @include themify($themes) {
                    background: themed("bg-color3");
            }
        }
        .vs-chart-view{
            width:calc(100% - 680px);
            height: calc(100% - 40px);
            padding:20px;
            box-shadow: 0 0 6px 2px #ccc;
            @include themify($themes) {
                    background: themed("bg-color3");
            }
        }
        .vs-chart-data{
            width: 320px;
            height:100%;
            box-shadow: 0 0 6px 2px #ccc;
            @include themify($themes) {
                    background: themed("bg-color3");
            }
            .vs-chart-data-option{
                width: calc(100% - 20px);
                height:calc(100% - 50px);
                padding:20px 10px;
                overflow-y: auto;
            }
        }
    }
}

</style>