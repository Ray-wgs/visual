<template>
    <el-form-item :label="templateOpt.name" style="padding-left:20px">
        <el-input style="width: 200px" v-model="chartOpt.flattenOption[templateOpt.model]"  v-if="templateOpt.ui!.type === 'text'" :placeholder="templateOpt.ui!.placeholder"></el-input>
        <el-input-number style="width: 200px" v-model="chartOpt.flattenOption[templateOpt.model]" :step="templateOpt.ui!.step" :min="templateOpt.ui!.min" :max="templateOpt.ui!.max" v-if="templateOpt.ui!.type === 'number'" ></el-input-number>
        <el-switch v-model="chartOpt.flattenOption[templateOpt.model]" v-if="templateOpt.ui!.type === 'boolean'" ></el-switch>
        <el-color-picker v-model="chartOpt.flattenOption[templateOpt.model]" show-alpha v-if="templateOpt.ui!.type === 'color'"></el-color-picker>
        <el-select style="width: 200px" v-model="chartOpt.flattenOption[templateOpt.model]" placeholder="请选择" v-if="templateOpt.ui!.type === 'select'">
            <el-option
                v-for="(item, index) in templateOpt.ui!.options"
                :key="index"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <vs-input-array  style="width: 200px" :array="chartOpt.flattenOption[templateOpt.model]" v-if="templateOpt.ui!.type === 'array'" @onChange="(val:[])=> chartOpt.flattenOption[templateOpt!.model] = val"> </vs-input-array> 
    </el-form-item>
</template>

<script lang='ts' setup name="vsChartItemOpt">
import { reactive, toRefs,ref,PropType} from 'vue'
import { useChartStore } from '@/stores/chart';
import { storeToRefs } from 'pinia';
import {vsChartTmeplate} from '@/types/chart.module'
import vsInputArray from '@/components/InputArray.vue'
const store = useChartStore()
const {chartOpt} = storeToRefs(store)
const props = defineProps({
    templateOpt:{
        type:Object as PropType<vsChartTmeplate>,
        require:true,
        default:()=>{}
    }
})
const {templateOpt} = toRefs(props)
</script>
<style scoped lang='scss'>
</style>
