<template>
    <div class="vs-three-header-container">
        <div class="three-name">
            <span style="margin-right:12px">输入三维场景名称</span>
            <el-input  style="width:200px"></el-input>
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