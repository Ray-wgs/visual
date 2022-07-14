<template>
    <el-form-item label="字体大小">
        <vs-input-number
            :strValue="curCompOpt.style.fontSize"
            controls-position="right"
            @onChange="(fontSize:string)=>{curCompOpt.style.fontSize = fontSize}"
        >
        </vs-input-number>
    </el-form-item>
    <el-form-item label="字体颜色">
        <el-color-picker v-model="curCompOpt.style.color" show-alpha />
    </el-form-item>
    <el-form-item label="文字粗细">
        <el-input-number v-model="curCompOpt.style.fontWeight" :min="100" :max="700" :step="100" show-alpha />
    </el-form-item>
    <el-form-item label="行高">
        <el-input-number v-model="curCompOpt.style.lineHeight" :min="0" :max="100" :step="0.1" show-alpha />
    </el-form-item>
    <el-form-item label="对齐方式">
        <el-select v-model="curCompOpt.style.textAlign">
            <el-option
            v-for="item in optStore.style.textAlign"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
            </el-option>
        </el-select>
    </el-form-item>
</template>

<script lang='ts' setup name="vsCommonOpt">
import { useBoardStore } from '@/stores/board';
import {useCompOptStore} from '@/stores/compOpt'
import {storeToRefs} from 'pinia'
const store = useBoardStore()
const optStore = useCompOptStore()
const {curCompOpt} = storeToRefs(store)
</script>
<style scoped lang='scss'>
</style>