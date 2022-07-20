<template>
    <div class="vs-three-opt-container">
        <div class="vs-three-header">
            <vs-three-header-opt />
        </div>
        <div class="vs-three-container">
            
        </div>
    </div>
</template>

<script lang='ts' setup name="vsThreeContainer">
import vsThreeHeaderOpt from './components/ThreeHeaderOpt.vue'
import { reactive, toRefs,ref} from 'vue'

</script>
<style scoped lang='scss'>
.vs-three-opt-container{
    width: 100%;
    height:100vh;
    .vs-three-header{
        box-sizing: border-box;
        display: flex;
        width: 100%;
        height:50px;
        box-shadow: 0 0 6px 2px #ccc;
        line-height: 50px;
        margin-bottom:10px;
        padding:0 20px;
    }
}

</style>