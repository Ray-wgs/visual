<template>
    <el-form :model="curCompOpt" label-width="80px" label-position="top" >
        <el-form-item label="横坐标">
            <vs-input-number
                :strValue="curCompOpt.style.left"
                controls-position="right"
                @onChange="(left:string)=>{curCompOpt.style.left = left}"
            >
            </vs-input-number>
        </el-form-item>
        <el-form-item label="纵坐标">
            <vs-input-number
                :strValue="curCompOpt.style.top"
                controls-position="right"
                @onChange="(top:string)=>{curCompOpt.style.top = top}"
            >
            </vs-input-number>
        </el-form-item>
        <el-form-item label="宽度">
            <vs-input-number
                :strValue="curCompOpt.style.width"
                controls-position="right"
                @onChange="(width:string)=>{curCompOpt.style.width = width}"
            >
            </vs-input-number>
        </el-form-item>
        <el-form-item label="高度">
            <vs-input-number
                v-model:strValue="curCompOpt.style.height"
                controls-position="right"
                @onChange="(height:string)=>{curCompOpt.style.height = height}"
            >
            </vs-input-number>
        </el-form-item>
    </el-form>
</template>

<script lang='ts' setup name="vsBoardPositionOpt">
import { reactive, toRefs,ref} from 'vue'
import { useBoardStore } from '@/stores/board';
import {storeToRefs} from 'pinia'
const store = useBoardStore()
const {curCompOpt} = storeToRefs(store)
</script>
<style scoped lang='scss'>
</style>