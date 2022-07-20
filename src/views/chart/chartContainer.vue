<template>
    <div class="vs-chart-opt-container">
        <div class="vs-chart-header">
            <vs-chart-header-opt />
        </div>
        <div class="vs-chart-warp">
            <div class="vs-chart-style">
                <el-form :model="chartOpt.option" label-width="150px" label-position="top">
                    <vs-chart-common-opt :type='chartOpt.type'/> 
                </el-form>
            </div>
            <div class="vs-chart-view">
                <vs-chart :option='chartOpt.option' />
            </div>
            <div class="vs-chart-data">
                <div class="vs-chart-data-option">
                    <vs-code-mirror   v-model="chartOpt.jsonOption" @change="onChange">
                    </vs-code-mirror>   
                </div>
                <div class="vs-chart-data-option-msg">
                    <span>错误信息</span>
                    <div class="error">{{msg}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup name="vsChartContainer">
import { reactive, toRefs,ref,watch} from 'vue'
import vsChartCommonOpt from './components/CommonOpt.vue'
import vsChartHeaderOpt from './components/ChartHeaderOpt.vue'
import { useChartStore } from '@/stores/chart';
import { storeToRefs } from 'pinia';
import {flatten,unflatten} from '@/utils/func'
import examples from './config/example/index'
const store = useChartStore()
const {chartOpt} = storeToRefs(store)
const msg = ref('')
chartOpt.value.option = examples[chartOpt.value.type]
chartOpt.value.flattenOption = flatten(examples[chartOpt.value.type])
const onChange = (code:string)=>{
    try {
        chartOpt.value.option = JSON.parse(code)
        chartOpt.value.flattenOption = flatten(chartOpt.value.option)
        msg.value=''
    } catch (error:any) {
        msg.value = error
    }
}
watch(()=>chartOpt.value.flattenOption,()=>{
    chartOpt.value.option = {...chartOpt.value.option,...unflatten(chartOpt.value.flattenOption)}
    chartOpt.value.jsonOption = JSON.stringify(chartOpt.value.option,null,4)
},{deep:true})
</script>
<style scoped lang='scss'>
.vs-chart-opt-container{
    width: 100%;
    height:100vh;
    .vs-chart-header{
        box-sizing: border-box;
        display: flex;
        width: 100%;
        height:50px;
        box-shadow: 0 0 6px 2px #ccc;
        line-height: 50px;
        margin-bottom:10px;
        padding:0 20px;
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
                height:calc(100% - 150px);
                padding:20px 10px;
                overflow-y: auto;
            }
            .vs-chart-data-option-msg{
                height:100px;
                overflow-y: auto;
                background-color: #ccc;
                .error{
                    color:rgb(236, 13, 13);
                }
            }
        }
    }
}

</style>