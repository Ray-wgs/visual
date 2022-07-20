<template>
    <el-tabs v-model="active" class="vs-tabs" >
        <el-tab-pane label="Style" name="Style">
            <el-form :model="curCompOpt" label-width="80px" label-position="top"  v-if="curCompOpt">
                <component :is="curCompOpt.optComp"></component>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="Data" name="Data">Data</el-tab-pane>
        <el-tab-pane label="Position" name="Position" >
            <vs-position-opt />
        </el-tab-pane>
    </el-tabs>
</template>

<script lang='ts' setup name="vsBoardPanelOpt">
import { reactive, toRefs,ref} from 'vue'
import { useBoardStore } from '@/stores/board'
import { storeToRefs } from 'pinia'
import vsPositionOpt from './PositionOpt.vue'
const active = ref('Style')
const store = useBoardStore()
const {curCompOpt} = storeToRefs(store)
</script>
<style scoped lang='scss'>
.vs-tabs{
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
</style>