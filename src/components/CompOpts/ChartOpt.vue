<template>
    <el-form-item label="图表id">
        <el-input v-model="curCompOpt.propValue.chartId"></el-input>
    </el-form-item>
    <el-form-item>
        <el-input type="textarea" :modelValue="optJson" @onChange="changeOpt">

        </el-input>
    </el-form-item>
</template>

<script lang='ts' setup name="vsChartOpt">
import { useBoardStore } from '@/stores/board';
import {useCompOptStore} from '@/stores/compOpt'
import {storeToRefs} from 'pinia'
import {ref,computed} from 'vue'
const store = useBoardStore()
const optStore = useCompOptStore()
const {curCompOpt} = storeToRefs(store)
const optJson = computed(()=>{
    return JSON.stringify(curCompOpt.value.propValue.option,null,4)
})
const changeOpt = (code:string)=>{
    console.log(code)
    curCompOpt.value.propValue.option = JSON.parse(code)
}
</script>
<style scoped lang='scss'>
</style>