<template>
    <div v-if="templateOpt.children">
        <el-collapse v-model="active">
            <el-collapse-item  :title="templateOpt.name" :name="templateOpt.name">
                <template   v-if="templateOpt.tabs">
                    <vs-chart-tab-panel-opt :template-opt='templateOpt' />
                </template>
                <template v-for="(templateItem,index) in templateOpt.children"  v-else>
                    <vs-chart-panel-opt :template-opt='templateItem'  />
                </template>
            </el-collapse-item>
        </el-collapse>
    </div>
    <div v-else>
        <vs-chart-item-opt :template-opt='templateOpt'  />
    </div>
</template>

<script lang='ts' setup name="vsChartPanelOpt">
import { reactive, toRefs,ref,PropType} from 'vue'
import vsChartItemOpt from './ChartItemOpt.vue'
import vsChartTabPanelOpt from './ChartTabPanelOpt.vue'
import {vsChartTmeplate} from '@/types/chart.module'
const props = defineProps({
    templateOpt:{
        type:Object as PropType<vsChartTmeplate>,
        require:true,
        default:()=>{}
    }
})
const {templateOpt} = toRefs(props) 
console.log(templateOpt)
const active = ref('')
</script>
<style scoped lang='scss'>
:deep(.el-collapse-item__header){
    padding-left:15px;
}
:deep(.el-collapse-item__content){
    padding-bottom:0px;
}
</style>