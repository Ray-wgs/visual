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
            >
            <template #default="{ item }">
                <div class="icon-option">
                    <vs-colors-icon style="margin-right: 8px;width:25px" :icon="item.value" type="svg"></vs-colors-icon>
                    
                    <el-tooltip
                        class="box-item"
                        :content="item.label"
                        placement="top-start"
                    >
                        <div class="icon-option-label">{{item.label}}</div>
                    </el-tooltip>
                </div>
            </template>
            </el-select-v2>
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
.icon-option{
    display: flex;
    align-items: center;
    height:40px;
    .icon-option-label{
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>