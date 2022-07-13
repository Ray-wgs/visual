<template>
    <el-form-item label="图片路径">
        <el-input
            v-model="curCompOpt.propValue.src"
        >
        </el-input>
    </el-form-item>
    <el-form-item label="替换文本">
        <el-input v-model="curCompOpt.propValue.alt"></el-input> 
    </el-form-item>
    <el-form-item label="提示信息">
        <el-input v-model="curCompOpt.propValue.title"></el-input> 
    </el-form-item>
    <el-form-item label="填充方式">
        <el-select v-model="curCompOpt.style.objectFit">
            <el-option
            v-for="item in optStore.style.objectFit"
            :label="item.label"
            :value="item.value"
            :key="item.value"
            >

            </el-option>
        </el-select>
    </el-form-item>
</template>

<script lang='ts' setup name="vsImgOpt">
import { useBoardStore } from '@/stores/board';
import {useCompOptStore} from '@/stores/compOpt'
import {storeToRefs} from 'pinia'
const store = useBoardStore()
const optStore = useCompOptStore()
const {curCompOpt} = storeToRefs(store)
</script>
<style scoped lang='scss'>
</style>