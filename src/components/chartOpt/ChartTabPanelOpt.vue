<template>
    <div v-if="templateOpt.children">
        <el-tabs v-model="active" >
            <el-tab-pane 
            :label="templateOpt.name + ( Number(index) + 1)" 
            :name="templateOpt.name + ( Number(index) + 1)" 
            v-for="(child,index) in templateOpt.children"
            :key="child.model"
            >
                <vs-chart-panel-opt :template-opt="childKey" v-for="childKey in child"/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang='ts' setup name="vsChartTabPanelOpt">
import { reactive, toRefs,ref,PropType} from 'vue'
import vsChartPanelOpt from './ChartPanelOpt.vue'
import {vsChartTmeplate} from '@/types/chart.module'
import { useChartStore } from '@/stores/chart';
const props = defineProps({
    templateOpt:{
        type:Object as PropType<vsChartTmeplate>,
        require:true,
        default:()=>{}
    }
})
const {templateOpt} = toRefs(props) 
const store = useChartStore()
const active = ref('系列1')
</script>
<style scoped lang='scss'>
:deep(.el-collapse-item__header){
    padding-left:15px;
    width: calc(100% - 65px);
}
:deep(.el-collapse-item__content){
    padding-bottom:0px;
}
:deep(.el-tabs){
    padding-left:15px;
}
</style>