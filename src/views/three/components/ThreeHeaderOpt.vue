<template>
    <div class="vs-three-header-container">
        <div class="three-name">
            <span style="margin-right:12px">输入三维场景名称</span>
            <el-input  style="width:200px"></el-input>
        </div> 
        <div class="three-name">
            <span style="margin-right:12px">模型可拖拽</span>
            <el-switch v-model="threeOpt.controls.drag"></el-switch>
        </div> 
        <div class="three-helper">
            <el-popover  :width="400" trigger="click">
                <template #reference>
                    <el-button style="margin-right: 16px">选择3D辅助对象</el-button>
                </template>
                <el-form-item v-for="helper in threeOpt.option.helpers" :label="helper.label">
                    <el-switch v-model="helper.value">

                    </el-switch>
                </el-form-item>
            </el-popover>
        </div>
        <div class="three-opt">
            <el-button>
                保存
            </el-button>
        </div>
    </div>
</template>

<script lang='ts' setup name="vsThreeHeaderOpt">
import { reactive, toRefs,ref} from 'vue'
import { useThreeStore } from '@/stores/three';
import { storeToRefs } from 'pinia';
const store = useThreeStore()
const {threeOpt}  = storeToRefs(store)
</script>
<style scoped lang='scss'>
.vs-three-header-container{
    width: 100%;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .three-name{
        width: 400px;
    }
}
</style>