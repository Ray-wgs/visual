<template>
    <vs-common-opt></vs-common-opt>
    <el-form-item label="展示文本">
        <el-input
            v-model="curCompOpt.propValue.text"
        >
        </el-input>
    </el-form-item>
    <el-form-item label="是否开启跑马灯">
        <el-switch v-model="curCompOpt.propValue.running"></el-switch> 
    </el-form-item>
    <el-form-item label="跑马灯周期">
        <el-input-number v-model="curCompOpt.propValue.runCycle" :min="100"  :step="100"  />
    </el-form-item>
    <el-form-item label="是否开启超链接">
        <el-switch v-model="curCompOpt.propValue.isURL"></el-switch> 
    </el-form-item>
    <el-form-item label="超链接地址">
        <el-input v-model="curCompOpt.propValue.url"></el-input> 
    </el-form-item>
    <el-form-item label="打开方式">
        <el-select v-model="curCompOpt.propValue.openType">
            <el-option
            v-for="item in optStore.prop.openType"
            :label="item.label"
            :value="item.value"
            :key="item.value"
            >

            </el-option>
        </el-select> 
    </el-form-item>
</template>

<script lang='ts' setup name="vsTextOpt">
import { useBoardStore } from '@/stores/board';
import {useCompOptStore} from '@/stores/compOpt'
import {storeToRefs} from 'pinia'
import vsCommonOpt from './CommonOpt.vue';
const store = useBoardStore()
const optStore = useCompOptStore()
const {curCompOpt} = storeToRefs(store)
</script>
<style scoped lang='scss'>
</style>