<template>
    <el-form-item label="设置默认时间">
        <el-date-picker
            v-model="curCompOpt.propValue.defaultTime"
            type="datetime"
            placeholder="Select date and time"
        />
    </el-form-item>
    <el-form-item label="开启实时时间">
        <el-switch v-model="curCompOpt.propValue.realTime"></el-switch> 
    </el-form-item>
    <el-form-item label="刷新周期">
        <el-input-number v-model="curCompOpt.propValue.refreshCycle" :min="100"  :step="100"  />
    </el-form-item>
    <el-form-item label="时间格式化">
        <el-input v-model="curCompOpt.propValue.format"></el-input> 
    </el-form-item>
</template>

<script lang='ts' setup name="vsDateTimeOpt">
import { useBoardStore } from '@/stores/board';
import {useCompOptStore} from '@/stores/compOpt'
import {storeToRefs} from 'pinia'
const store = useBoardStore()
const optStore = useCompOptStore()
const {curCompOpt} = storeToRefs(store)
</script>
<style scoped lang='scss'>
</style>