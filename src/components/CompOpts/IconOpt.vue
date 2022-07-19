<template>
    <vs-common-opt></vs-common-opt>
    <el-form-item label="图标类别">
        <el-select v-model="curCompOpt.propValue.type">
            <el-option
            v-for="item in optStore.prop.iconType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
            </el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="图标">
            <el-select-v2
                v-model="curCompOpt.propValue.icon"
                :options="iconData"
                placeholder="选择图标"
                filterable
            />
    </el-form-item>
</template>

<script lang='ts' setup name="vsColorsIconOpt">
import {ref} from 'vue'
import { useBoardStore } from '@/stores/board';
import {useCompOptStore} from '@/stores/compOpt'
import {storeToRefs} from 'pinia'
import iconMetaData from '@/assets/iconfont/iconfont.json'
const store = useBoardStore()
const optStore = useCompOptStore()
const {curCompOpt} = storeToRefs(store)
console.log(iconMetaData)

const iconData = ref<any[]>([])
iconData.value = iconMetaData.glyphs.map(icon=>{
    return {
        label:`${icon.name}(${icon.font_class})`,
        value:icon.font_class
    }
})
</script>
<style scoped lang='scss'>
</style>