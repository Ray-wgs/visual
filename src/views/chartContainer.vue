<template>
    <div class="vs-chart-container">
        <div class="vs-chart-header">
        </div>
        <div class="vs-chart-warp">
            <div class="vs-chart-style">
                <el-form :model="chartOpt.option" label-width="150px" label-position="top">
                    <vs-chart-common-opt /> 
                </el-form>
            </div>
            <div class="vs-chart-view">
                <vs-chart :option='chartOpt.option' />
            </div>
            <div class="vs-chart-data">

            </div>
        </div>
    </div>
</template>

<script lang='ts' setup name="vsChartContainer">
import { reactive, toRefs,ref,watch} from 'vue'
import vsChartCommonOpt from '@/components/chartOpt/CommonOpt.vue'
import { useChartStore } from '@/stores/chart';
import { storeToRefs } from 'pinia';
import {unflatten} from '@/utils/func'
const store = useChartStore()
const {chartOpt} = storeToRefs(store)
watch(()=>chartOpt.value.flattenOption,()=>{
    chartOpt.value.option = {...chartOpt.value.option,...unflatten(chartOpt.value.flattenOption)}
},{deep:true})
</script>
<style scoped lang='scss'>
.vs-chart-container{
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
            @include themify($themes) {
                    background: themed("bg-color3");
            }
        }
        .vs-chart-view{
            width:calc(100% - 680px);
            height: 100%;
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
        }
    }
}

</style>